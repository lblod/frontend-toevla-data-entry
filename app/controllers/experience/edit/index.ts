import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import Experience from 'frontend-toevla-data-entry/models/experience';

export default class ExperienceEditIndex extends Controller {
  @tracked model!: Experience;

  @action
  async submit(event: Event) {
    event.preventDefault();
    await this.model.save();
    this.transitionToRoute( "experience.show", this.model );
  }

  @action
  async delete() {
    const poi = this.model.pointOfInterest;
    await this.model.destroyRecord();
    this.transitionToRoute( "poi.show.experiences.index", poi );
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'experience/edit/index': ExperienceEditIndex;
  }
}
