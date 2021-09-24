import Route from '@ember/routing/route';
import { museaTree, recaTree } from 'frontend-toevla-data-entry/utils/uris/concept-schemes';
import Restaurant from 'frontend-toevla-data-entry/models/restaurant';

export default class PoiShowTreeRoute extends Route {
  get poi() {
    return this.modelFor("poi.show");
  }

  async model() {
    const poi = this.poi;

    let conceptSchemeURI;
    if( poi.constructor === Restaurant )
      conceptSchemeURI = recaTree;
    else
      conceptSchemeURI = museaTree;

    const model = await this.store.query( 'concept-scheme', {
      "page[size]": 1,
      "filter[:uri:]": conceptSchemeURI
    });
    return model.firstObject;
  }

  setupController( controller ) {
    super.setupController(...arguments);
    controller.poi = this.poi;
  }
}
