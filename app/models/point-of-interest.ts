import { attr, hasMany, belongsTo } from '@ember-data/model';
import Experience from './experience';
import Entrance from './entrance';
import Parking from './parking';
import Toilet from './toilet';
import RouteDescription from './route-description';
import TrainStop from './train-stop';
import BusStop from './bus-stop';
import TramStop from './tram-stop';
import File from './file';
import Restaurant from './restaurant';
import Shop from './shop';
import Widget from './widget';
import Concept from './concept';
import Scorable from './scorable';

export default class PointOfInterest extends Scorable {
  @attr('string') uri: string | null | undefined;
  @attr('datetime') updatedAt: Date | null | undefined;
  @attr('string') label: string | null | undefined;
  @attr('string') comment: string | null | undefined;
  @attr('string') commentOnPublicTransport: string | null | undefined;
  @attr('string') commentOnEntrance: string | null | undefined;
  @attr('string') commentOnAlternativeEntranceForWheelchair: string | null | undefined;
  @attr('string') locationString: string | null | undefined;
  @attr('boolean', { allowNull: true }) hasCashPayment: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasPaymentWithMovableElectronicPaymentSystem: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasPaymentWithFixedElectronicPaymentSystem: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasOnlineOrderingAndPaymentOption: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) assistanceForGuideDogs: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasVisualVisitPreparationPlan: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) websiteHasScreenreader: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) websiteSupportsWcag2: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) websiteAllowsTextIncrease: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) publicTransportGuidanceAvailable: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) websiteHasAccessibleContrast: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) websiteHasSignLanguage: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasClearlyRecognizableBuilding: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasClearlyRecognizableEntrance: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasVisibleGuidelines: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) extraAttentionGivenToAcoustics: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasAlternativeEntranceForWheelchair: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasRevolvingDoor: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) isNoisy: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasGlassFloor: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasDifficultStaircaseForDogs: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasEscalator: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasWheelchairAccessibleToilet: boolean | undefined | null;
  @hasMany('experience') experiences!: Experience[];
  @hasMany('entrance') entrances!: Entrance[];
  @hasMany('parking') parkings!: Parking[];
  @hasMany('toilet') toilets!: Toilet[];
  @belongsTo('route-description') publicTransportRouteDescription!: RouteDescription | null;
  @belongsTo('restaurant') restaurant!: Restaurant | null;
  @belongsTo('shop') shop!: Shop | null;
  @hasMany('train-stop') trainStops!: TrainStop[];
  @hasMany('bus-stop') busStops!: BusStop[];
  @hasMany('tram-stop') tramStops!: TramStop[];
  @hasMany('file') files!: File[];
  @hasMany('file', { inverse: null }) images!: File[];
  @belongsTo('widget') widget!: Widget;
  @belongsTo('concept') wifiAvailability: Concept | undefined | null;
  @belongsTo('concept') typeOfGlassDoorDecoration: Concept | undefined | null;
  @belongsTo('concept') acceptanceOfMuseumPass: Concept | undefined | null;
  @belongsTo('concept') acceptanceOfUitpas: Concept | undefined | null;
  @belongsTo('concept') acceptanceOfCityPass: Concept | undefined | null;
  @belongsTo('concept') acceptanceOfEdc: Concept | undefined | null;
  @belongsTo('concept') discountForGuide: Concept | undefined | null;
  @belongsTo('concept') discountForTranslator: Concept | undefined | null;
  @belongsTo('concept') wheelchairAvailability: Concept | undefined | null;
  @hasMany('concept') summaryIcons: Concept[] | undefined | null;

  get city() {
    return "[ehe"
    if ( this.locationString ) {
      return this.locationString.match(/ ([^0-9])$/)[1];
    } else {
      return "he"
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'point-of-interest': PointOfInterest;
  }
}
