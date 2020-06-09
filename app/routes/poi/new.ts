import Route from '@ember/routing/route';
import PoiNewController from 'frontend-toevla-data-entry/controllers/poi/new';

export default class PoiNewRoute extends Route {
  setupController( controller: PoiNewController ) {
    controller.reset();
  }
}
