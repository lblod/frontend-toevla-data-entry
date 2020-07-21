import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import EditComponentsBooleanComponent from './boolean';
import { property, getInstance, setInstanceValue, save } from 'frontend-toevla-data-entry/utils/path-instances';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';

export default class EditComponentsCentimetersComponent extends EditComponentsBooleanComponent {
  @tracked internalWidth;
  @tracked hasSetWidth;
  @tracked internalHeight
  @tracked hasSetHeight;

  get width(){
    return this.hasSetWidth ? this.internalWidth : this.currentInstance.width;
  }
  set width(value){
    this.internalWidth = value;
    this.hasSetWidth = true;
  }
  get height(){
    return this.hasSetHeight ? this.internalHeight : this.currentInstance.height;
  }
  set height(value){
    this.internalHeight = value;
    this.hasSetHeight = true;
  }

  /**
   * Ensures we have an intermediate object and a current state.
   */
  @handler()
  async initIntermediateObjects() {
    this.currentInstance = await getInstance(this.args.experience, this.args.key + ".width");
    this.statechart.send("SETUP_OBJECTS");
  }

  @handler()
  async save(){
    if( this.hasSetWidth || this.hasSetHeight ) {
      await setInstanceValue( this.args.experience, this.args.key + ".width", this.width );
      await setInstanceValue( this.args.experience, this.args.key + ".height", this.height );
      await save( this.args.experience, this.args.key + ".width" ); // saves the object above
    }
    this.statechart.send("SAVED");
  }
}
