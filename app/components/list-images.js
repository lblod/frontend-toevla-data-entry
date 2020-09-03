import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListImagesComponent extends Component {
  @action
  removeFile(file){
    file.pointOfInterest=null;
    file.save();
  }
}
