import Model, { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';

export default class EntranceModel extends Model {
  @attr('boolean') hasMannedDesk: boolean | undefined | null;
  @attr('boolean') hasTeleloopAtCounter: boolean | undefined | null;
  @attr('number') highestThreshold: number | undefined | null;
  @attr('number') amountOfStairs: number | undefined | null;
  @attr('number') amountOfSlopes: number | undefined | null;
  @attr('boolean') hasEntranceGutters: boolean | undefined | null;
  @attr('boolean') hasRevolvingDoor: boolean | undefined | null;
  @attr('number') doorWidth: number | undefined | null;
  @attr('number') hasEntranceCheck: number | undefined | null;
  @attr('number') turningRadiusAtDoor: number | undefined | null;
  @attr('number') forceForOpeningDoor: number | undefined | null;
  @attr('number') hasLoweredCounter: number | undefined | null;

  @belongsTo('point-of-interest') pointOfInterest!: PointOfInterest;

}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'entrance': EntranceModel;
  }
}
