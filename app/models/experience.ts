import Model, { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';
import GuidedTour from './guided-tour';
import Auditorium from './auditorium';
import Route from './route';

export default class Experience extends Model {
  @belongsTo('point-of-interest') pointOfInterest!: PointOfInterest;
  @belongsTo('route') circulation!: Route;
  @belongsTo('guided-tour') guidedTour!: Guidedtour;
  @belongsTo('auditorium') auditorium!: Auditorium;
  @attr('string') title: string | null | undefined;
  @attr('string') comment: string | null | undefined;
  @attr('boolean') isMainExperience: boolean | null | undefined;
  @attr('boolean') hasMultipleElementsToDriveUnder: boolean | null | undefined;
  @attr('boolean') hasGoodLighting: boolean | null | undefined;
  @attr('boolean') hasMagnifyingGlass: boolean | null | undefined;
  @attr('boolean') brochureHasAccessibleContrast: boolean | null | undefined;
  @attr('boolean') brochureIsAvailableInBraille: boolean | null | undefined;
  @attr('boolean') brochureIsAvailableInLargePrint: boolean | null | undefined;
  @attr('boolean') signsHaveAccessibleContrast: boolean | null | undefined;
  @attr('boolean') signsHaveNoReflection: boolean | null | undefined;
  @attr('boolean') signsHaveBraille: boolean | null | undefined;
  @attr('boolean') signsInLargePrint: boolean | null | undefined;
  @attr('boolean') audioGuideOnlyInDutch: boolean | null | undefined;
  @attr('boolean') audioGuideAvailableInMultipleLanguages: boolean | null | undefined;
  @attr('boolean') hasMovieGuide: boolean | null | undefined;
  @attr('boolean') hasVirtualTechnology: boolean | null | undefined;
  @attr('boolean') hasTouchElements: boolean | null | undefined;
  @attr('boolean') hasSmellElements: boolean | null | undefined;
  @attr('boolean') hasActionableElements: boolean | null | undefined;
  @attr('boolean') hasListeningElements: boolean | null | undefined;
  @attr('boolean') hasPlacesOfSilence: boolean | null | undefined;
  @attr('string') otherElements: boolean | null | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'experience': Experience;
  }
}
