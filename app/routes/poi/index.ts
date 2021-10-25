import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

import StoreService from '@ember-data/store';

export default class PoiIndexRoute extends Route {
  @service store!: StoreService;

  model() {
    return this.store.query('point-of-interest', {
      "page[size]": 100,
      "sort": "label"
    });
  }
}
