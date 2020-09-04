import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileEditController extends Controller {
  constructor(...args){
    super(...args);
  }
  @tracked
  file=this.model;

  @action
  async save(){
    this.model.save();
  }
  @action
  async updateLabel(data){
    this.model.label=data;
  }
  @action
  async delete(){
    this.model.destroyRecord();
    history.back();
  }
}
