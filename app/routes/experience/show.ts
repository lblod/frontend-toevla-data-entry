import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Store from '@ember-data/store';
import Experience from 'frontend-toevla-data-entry/models/experience';

export default class ExperienceShow extends Route {
  @service store!: Store;

  model( { id }: { id: string } ): Promise<Experience | undefined> {
    return this.store.findRecord("experience", id);
  }
}
