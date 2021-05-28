import Model, { attr, belongsTo } from '@ember-data/model';
import PathToEntrance from './path-to-entrance';

export default class ParkingModel extends Model {
  @attr('string') comment: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) isPartOfLocation: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasDriveOnPossibility: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) isWellLit: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasDetailedRouteDescription: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) detailedRouteDescriptionHasScreenReader: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) detailedRouteDescriptionIsAvailableInFlemishSignLanguage: boolean | undefined | null;
  @attr('number') numberOfWheelchairFriendlySpots: boolean | undefined | null;
  @attr('string') descriptionOfParkingOnPublicDomain: string | undefined | null;
  @attr('boolean', { allowNull: true }) hasWheelchairFriendlyTerrain: boolean | undefined | null;
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
