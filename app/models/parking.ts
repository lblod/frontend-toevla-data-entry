import Model, { attr, belongsTo } from '@ember-data/model';
import PathToEntrance from './path-to-entrance';

export default class ParkingModel extends Model {
  @attr('string') comment: boolean | undefined | null;
  @attr('boolean') isPartOfLocation: boolean | undefined | null;
  @attr('boolean') hasDriveOnPossibility: boolean | undefined | null;
  @attr('boolean') isWellLit: boolean | undefined | null;
  @attr('boolean') hasDetailedRouteDescription: boolean | undefined | null;
  @attr('boolean') detailedRouteDescriptionHasScreenReader: boolean | undefined | null;
  @attr('boolean') detailedRouteDescriptionIsAvailableInFlemishSignLanguage: boolean | undefined | null;
  @attr('number') numberOfWheelchairFriendlySpots: boolean | undefined | null;
  @attr('boolean') onPublicDomain: boolean | undefined | null;
  @attr('boolean') hasWheelchairFriendlyTerrain: boolean | undefined | null;
  @attr('number') parkingSpaceLength: number | undefined | null;
  @attr('number') parkingSpaceWidth: number | undefined | null;
  @attr('number') maxVehicleHeight: number | undefined | null;
  @belongsTo('path') pathToEntrance: PathToEntrance | undefined | null;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'parking': ParkingModel;
  }
}
