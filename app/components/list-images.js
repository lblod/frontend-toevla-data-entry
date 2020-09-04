import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListImagesComponent extends Component {
  @action
  async removeFile(poi, file){
    (await poi.images).removeObject(file);
    poi.save();
    // file.pointOfInterest=null;
    // file.save();
  }
}
