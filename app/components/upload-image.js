import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UploadImageComponent extends Component {
  @action
  uploaded(file){
    file.pointOfInterest=this.args.poi;
    file.save();
  }
}
