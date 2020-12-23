import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class PoiShowFilesEditController extends Controller {
  @tracked poi;

  @action
  async save() {
    this.model.save();
  }
  @action
  async updateLabel(data) {
    this.model.label = data;
  }

  @action
  async updateAlt(data) {
    this.model.alt = data;
  }

  @action
  async delete() {
    (await this.poi.images).removeObject(this.model);
    this.poi.save();
    this.transitionToRoute('experience.show.tree', this.experience);
  }

}
