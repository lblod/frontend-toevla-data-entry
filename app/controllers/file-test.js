import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FileTestController extends Controller {
  @tracked
  poi=this.model;
}
