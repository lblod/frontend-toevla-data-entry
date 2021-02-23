import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { property, getInstance, setInstanceValue, save } from 'frontend-toevla-data-entry/utils/path-instances';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';

export default class EditComponentsChoiceComponent extends Component {
  @tracked currentInstance;
  @tracked hasSetValue;
  @tracked configuredValue;
  @tracked options;
  @service store;

  @service smartStore;

  @statechart(
    {
      initial: "init",
      states: {
        init: {
          entry: ["initIntermediateObjects"],
          on: {
            SETUP_OBJECTS: "dataEntry",
            RESET: "resetting",
            FAIL: "failed"
          }
        },
        dataEntry: {
          on: {
            RESET: "resetting"
          }
        },
        resetting: {
          entry: ["resetDataEntry"],
          on: {
            CLEARED: "init",
            RESET: "resetting"
          }
        },
        failed: {
          RESET: "resetting",
          CLEARED: "init"
        }
      }
    }
  )
  statechart;

  get currentProperty(){
    return property( this.args.key );
  }

  get currentValue() {
    if (this.hasSetValue) {
      return this.configuredValue;
    }

    if (this.currentInstance && this.currentProperty) {
      return get(this.currentInstance, this.currentProperty);
    }

    return null;
  }
  set currentValue(value) {
    this.configuredValue = value;
    this.hasSetValue = true;
  }

  @action
  updateSelection(uri) {
    this.currentValue = this.options.findBy( 'uri', uri );
    this.saveValue();
  }

  /**
   * Resets the data entry
   */
  @handler()
  resetDataEntry() {
    this.hasSetValue = false;
    this.statechart.send("CLEARED");
  }

  /**
   * Ensures we have an intermediate object and a current state.
   */
  @handler()
  async initIntermediateObjects() {
    try {
      this.currentInstance = await getInstance(this.args.subject, this.args.key);
      await get( this.currentInstance, this.currentProperty );
      const conceptSchemes = await this.store.query("concept-scheme", { "filter[:uri:]": this.args.conceptScheme });
      const conceptScheme = conceptSchemes.firstObject;
      this.options = await conceptScheme.topLevelNodes;
      this.statechart.send("SETUP_OBJECTS");
    } catch(e) {
      this.statechart.send("FAIL", e);
    }
  }

  async saveValue() {
    await setInstanceValue( this.args.subject, this.args.key, this.configuredValue );
    this.smartStore.persist( this.currentInstance );
  }
}
