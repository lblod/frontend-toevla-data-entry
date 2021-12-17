import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class DevelopersBuildingsRoute extends Route {
  @service store;

  model() {
    if( this.store.peekAll('widget').length )
      return this.store.findAll('widget');
    else
      return this.store.query('widget', { include: "point-of-interest", "page[size]": 250 });
  }
}
