import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

import StoreService from '@ember-data/store';

export default class BuildingsRoute extends Route {
  @service store!: StoreService;

  model() {
    if( this.store.peekAll('widget').length )
      return this.store.findAll('widget');
    else
      return this.store.query('widget', { include: "point-of-interest" });
  }
}
