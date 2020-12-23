import Route from '@ember/routing/route';
import { museaTree } from 'frontend-toevla-data-entry/utils/uris/concept-schemes';

export default class PoiShowTreeRoute extends Route {
  async model() {
    const model = await this.store.query( 'concept-scheme', {
      "page[size]": 1,
      "filter[:uri:]": museaTree
    });
    return model.firstObject;
  }

  setupController( controller ) {
    super.setupController(...arguments);
    controller.poi = this.modelFor("poi.show");
  }
}
