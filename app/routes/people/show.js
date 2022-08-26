import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class PeopleShowRoute extends Route {
  @service store;

  async model({id}) {
    const people =
          await (this
                 .store
                 .query( 'person', { filter: { ":id:": id }, include: "accounts.roles" } ));
    return people.firstObject;

    // return this.store.findRecord( 'person', id );
  }

  setupController( controller, model ) {
    super.setupController(...arguments);
    controller.fetchPois.perform();
  }
}
