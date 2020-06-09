import Route from '@ember/routing/route';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';
import PoiShowExperiencesIndexController from 'frontend-toevla-data-entry/controllers/poi/show/experiences/index';

export default class PoiShowExperiencesIndex extends Route {
  model() {
    const parent = this.modelFor("poi.show") as PointOfInterest;
    return parent.experiences;
  }

  setupController( controller : PoiShowExperiencesIndexController ) {
    controller.poi = this.modelFor("poi.show") as PointOfInterest;
  }
}
