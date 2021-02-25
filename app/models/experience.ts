import { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';
import GuidedTour from './guided-tour';
import Auditorium from './auditorium';
import Route from './route';
import Scorable from './scorable';

export default class Experience extends Scorable {
  @belongsTo('point-of-interest') pointOfInterest!: PointOfInterest;
  @belongsTo('route') circulation!: Route;
  @belongsTo('guided-tour') guidedTour!: GuidedTour;
  @belongsTo('auditorium') auditorium!: Auditorium;
  @attr('string') title: string | null | undefined;
  @attr('string') comment: string | null | undefined;
  @attr('boolean', { allowNull: true }) hasMultipleElementsToDriveUnder: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasGoodLighting: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasMagnifyingGlass: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) brochureHasAccessibleContrast: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) brochureIsAvailableInBraille: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) brochureIsAvailableInLargePrint: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) signsHaveAccessibleContrast: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) signsHaveNoReflection: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) signsHaveBraille: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) signsInLargePrint: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) audioGuideOnlyInDutch: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) audioGuideAvailableInMultipleLanguages: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasMovieGuide: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasVirtualTechnology: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasTouchElements: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasSmellElements: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasActionableElements: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasListeningElements: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasPlacesOfSilence: boolean | null | undefined;
  @attr('string') otherElements: boolean | null | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'experience': Experience;
  }
}
