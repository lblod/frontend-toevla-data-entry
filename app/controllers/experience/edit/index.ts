import { A } from '@ember/array';
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
    this.transitionToRoute( "poi.show.experiences.index", this.model.pointOfInterest );
  }

  @action
  async delete() {
    const poi = await this.model.pointOfInterest;
    const experiences = await poi.experiences;
    // experiences.removeObject(this.model);
    const targetArray = [...experiences.toArray()];
    targetArray.removeObject(this.model);
    this.model.pointOfInterest = null;
    await this.model.save();
    try {
      // records might not be deleted because of too many optionals in
      // the very large data model.  a post-factum cleanup-service can
      // go and clean things up so we will not consider this to be the
      // worst.
      await this.model.destroyRecord();
    } finally {
      this.transitionToRoute( "poi.show.experiences.index", poi );
    }
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'experience/edit/index': ExperienceEditIndex;
  }
}
