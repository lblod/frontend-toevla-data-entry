import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';

export default class PoiShowExperiencesIndex extends Controller {
  @tracked poi!: PointOfInterest;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/show/experiences/index': PoiShowExperiencesIndex;
  }
}
