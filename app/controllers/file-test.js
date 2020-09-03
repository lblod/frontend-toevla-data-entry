import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FileTestController extends Controller {
  constructor(...args){
    super(...args);
  }
  @tracked
  poi=this.model;
}
