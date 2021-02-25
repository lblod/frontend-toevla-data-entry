import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/concept';
import Scorable from 'frontend-toevla-data-entry/models/scorable';
import { property, getInstance, setInstanceValue } from 'frontend-toevla-data-entry/utils/path-instances';
import Statechart from 'ember-statecharts/utils/statechart';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';
import SmartStore from 'frontend-toevla-data-entry/services/smart-store';

interface EditComponentsBooleanArgs {
  key: string;
  treeNode: TreeNode;
  subject: Scorable;
}

export default class EditComponentsBoolean extends Component<EditComponentsBooleanArgs> {
  @tracked currentInstance: any;
  @tracked hasSetValue: boolean = false;
  @tracked configuredValue: any = undefined;

  @service smartStore!: SmartStore;

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
        failed: {}
      }
    }
  )
  statechart!: Statechart;

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
  }
  set currentValue(value) {
    this.configuredValue = value;
    this.hasSetValue = true;
    this.saveValue();
  }

  /**
   * Resets the data entry
   */
  @handler()
  resetDataEntry(){
    this.hasSetValue = false;
    this.statechart.send("CLEARED");
  }

  /**
   * Ensures we have an intermediate object and a current state.
   */
  @handler()
  async initIntermediateObjects() {
    this.currentInstance = await getInstance(this.args.subject, this.args.key);
    this.statechart.send("SETUP_OBJECTS");
  }

  async saveValue() {
    await setInstanceValue( this.args.subject, this.args.key, this.configuredValue );
    this.smartStore.persist( this.currentInstance );
  }
}
