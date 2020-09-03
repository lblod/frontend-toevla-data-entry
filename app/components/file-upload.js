import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FileUploadComponent extends Component {
  @action
  uploaded(file){
    file.pointOfInterest=this.args.poi;
    file.save;
  }
}
