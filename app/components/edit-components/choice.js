import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/experience';
import { property, getInstance, setInstanceValue, save } from 'frontend-toevla-data-entry/utils/path-instances';
import Statechart from 'ember-statecharts/utils/statechart';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';

export default class EditComponentsChoiceComponent extends Component {
  @tracked currentInstance;
  @tracked hasSetValue;
  @tracked configuredValue;
  @tracked options;
  @service store;


  @statechart(
    {
      initial: "init",
      states: {
        init: {
          entry: ["initIntermediateObjects"],
          on: {
            SETUP_OBJECTS: "dataEntry",
            RESET: "resetting"
          }
        },
        dataEntry: {
          on: {
            SAVE: "saving",
            RESET: "resetting"
          }
        },
        saving: {
          entry: ["save"],
          on: {
            SAVED: "saved",
            RESET: "resetAfterSave",
            FAIL: "failed"
          }
        },
        saved: {
          on: {
            SAVE: "saving",
            RESET: "resetting"
          }
        },
        resetAfterSave: {
          on: {
            SAVED: "resetting",
            FAIL: "failed"
          }
        },
        resetting: {
          entry: ["resetDataEntry"],
          on: {
            CLEARED: "init",
            RESET: "resetting"
          }
        },
        failed: {}
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
      this.currentInstance = await getInstance(this.args.experience, this.args.key);
      await get( this.currentInstance, this.currentProperty );
      const conceptSchemes = await this.store.query("concept-scheme", { "filter[:uri:]": this.args.conceptScheme });
      const conceptScheme = conceptSchemes.firstObject;
      this.options = await conceptScheme.topLevelNodes;
      this.statechart.send("SETUP_OBJECTS");
    } catch(e) {
      this.statechart.send("FAIL", e);
    }
  }

  // @action
  @handler()
  async save(){
    try {
      if( this.hasSetValue ) {
        await setInstanceValue( this.args.experience, this.args.key, this.configuredValue );
        await save( this.args.experience, this.args.key );
      }
      this.statechart.send("SAVED");
    } catch {
      this.statechart.send("FAIL");
    }
  }
}
