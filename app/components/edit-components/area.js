import { tracked } from '@glimmer/tracking';
import EditComponentsBooleanComponent from './boolean';
import { getInstance, setInstanceValue, save } from 'frontend-toevla-data-entry/utils/path-instances';
import { handler } from 'frontend-toevla-data-entry/utils/rockin-statechart';

export default class EditComponentsCentimetersComponent extends EditComponentsBooleanComponent {
  @tracked internalWidth;
  @tracked hasSetWidth;
  @tracked internalHeight
  @tracked hasSetHeight;

  get width(){
    if( !this.currentInstance )
      return null;
    else
      return this.hasSetWidth ? this.internalWidth : this.currentInstance.width;
  }
  set width(value){
    this.internalWidth = value;
    this.hasSetWidth = true;
    this.storeValues();
  }
  get height(){
    if( !this.currentInstance )
      return null;
    else
      return this.hasSetHeight ? this.internalHeight : this.currentInstance.height;
  }
  set height(value){
    this.internalHeight = value;
    this.hasSetHeight = true;
    this.storeValues();
  }

  /**
   * Ensures we have an intermediate object and a current state.
   */
  @handler()
  async initIntermediateObjects() {
    this.currentInstance = await getInstance(this.args.subject, this.args.key + ".width");
    this.statechart.send("SETUP_OBJECTS");
  }

  async storeValues() {
    await setInstanceValue( this.args.subject, this.args.key + ".width", this.width );
    await setInstanceValue( this.args.subject, this.args.key + ".height", this.height );
    this.smartStore.persist( this.currentInstance );
  }
}
