import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Store from '@ember-data/store';

export default class ExperienceEdit extends Route {
  @service store!: Store;

  model( { id }: { id: string } ){
    return this.store.findRecord("experience", id);
  }
}
