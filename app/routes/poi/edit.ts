import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Store from '@ember-data/store';
import ConceptScheme from '../../models/concept-scheme';
import PointOfInterest from '../../models/point-of-interest';

export default class PoiEdit extends Route {
  @service store!: Store;
  iconScheme: ConceptScheme | undefined;

  model({id}: {id: string}): Promise<PointOfInterest | null> {
    return this.store.findRecord("point-of-interest", id);
  }

  async afterModel(model: PointOfInterest | null) {
    this.iconScheme =
      (await this.store.query('concept-scheme', {
        "filter[:uri:]": "http://data.toevla.org/concept-schemes/summaryIcons",
        "include": "top-level-nodes"
      })).firstObject;

    await get(model, "summaryIcons");
  }

  setupController( controller ) {
    super.setupController(...arguments);
    controller.iconScheme = this.iconScheme;
  }
}
