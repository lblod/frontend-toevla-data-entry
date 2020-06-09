import Route from '@ember/routing/route';
import PoiShowExperiencesNewController from 'frontend-toevla-data-entry/controllers/poi/show/experiences/new';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';

export default class PoiShowExperiencesNew extends Route {
  setupController(controller : PoiShowExperiencesNewController){
    const poi = this.modelFor("poi.show") as PointOfInterest;
    controller.poi = poi;
  }
}
