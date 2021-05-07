import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class PeopleShowRoute extends Route {
  @service store;

  model({id}) {
    return this.store.findRecord( 'person', id );
  }

  setupController( controller, model ) {
    super.setupController(...arguments);
    controller.fetchPois.perform();
  }
}
