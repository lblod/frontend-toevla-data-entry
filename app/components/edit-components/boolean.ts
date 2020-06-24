import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/experience';
import { property, getInstance, setInstanceValue, save } from 'frontend-toevla-data-entry/utils/path-instances';
import Statechart from 'ember-statecharts/utils/statechart';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';

interface EditComponentsBooleanArgs {
  key: string;
  treeNode: TreeNode;
  experience: Experience;
}

export default class EditComponentsBoolean extends Component<EditComponentsBooleanArgs> {
  @tracked currentInstance: any;
  @tracked hasSetValue: boolean = false;
  @tracked configuredValue: any = undefined;

  @statechart(
    {
      initial: "init",
      states: {
        init: {
          entry: ["initIntermediateObjects"],
          on: {
            SETUP_OBJECTS: "dataEntry"
          }
        },
        dataEntry: {
          on: {
            SAVE: "saving"
          }
        },
        saving: {
          entry: ["save"],
          on: {
            SAVED: "dataEntry"
          }
        }
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
  }

  /**
   * Ensures we have an intermediate object and a current state.
   */
  @handler()
  async initIntermediateObjects() {
    this.currentInstance = await getInstance(this.args.experience, this.args.key);
    this.statechart.send("SETUP_OBJECTS");
  }

  // @action
  @handler()
  async save(){
    if( this.hasSetValue ) {
      await setInstanceValue( this.args.experience, this.args.key, this.configuredValue );
      await save( this.args.experience, this.args.key );
    }
    this.statechart.send("SAVED");
  }
}
