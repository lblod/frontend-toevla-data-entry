import { action } from '@ember/object';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/experience';
import { property, getInstance, setInstanceValue, save } from 'frontend-toevla-data-entry/utils/path-instances';

interface EditComponentsBooleanArgs {
  key: string;
  treeNode: TreeNode;
  experience: Experience;
}

export default class EditComponentsBoolean extends Component<EditComponentsBooleanArgs> {
  @tracked currentInstance;
  @tracked currentProperty: string;

  @tracked hasSetValue: boolean = false;
  @tracked configuredValue: any = undefined;
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

  constructor() {
    super(...arguments);
    this.currentProperty = property(this.args.key);
    this.initIntermediateObjects();
  }

  /**
   * Ensures we have an intermediate object and a current state.
   */
  async initIntermediateObjects() {
    this.currentInstance = await getInstance(this.args.experience, this.args.key);
  }

  @action
  async save(event: Event){
    event.preventDefault();

    if( this.hasSetValue ) {
      await setInstanceValue( this.args.experience, this.args.key, this.configuredValue );
      await save( this.args.experience, this.args.key );
    }
  }
}
