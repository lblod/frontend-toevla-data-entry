import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExperienceShowFilesEditController extends Controller {
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

  @tracked
  experience;

  @action
  async delete() {
    const poi = await this.experience.pointOfInterest;
    (await poi.images).removeObject(this.model);
    poi.save();
    this.transitionToRoute('experience.show.tree', this.experience);
  }
}
