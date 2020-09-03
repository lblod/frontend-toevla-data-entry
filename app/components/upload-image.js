import { get } from '@ember/object';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UploadImageComponent extends Component {
  @action
  async uploaded(file){
    debugger;
    (await this.args.poi.images).pushObject(file);
    this.args.poi.save();
  }
}
