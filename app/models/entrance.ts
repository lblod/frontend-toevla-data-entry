import Model, { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';
import Concept from './concept';

export default class EntranceModel extends Model {
  @attr('boolean', { allowNull: true }) hasMannedDesk: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasTeleloopAtCounter: boolean | undefined | null;
  @attr('number') highestThreshold: number | undefined | null;
  @attr('number') amountOfStairs: number | undefined | null;
  @attr('number') amountOfSlopes: number | undefined | null;
  @attr('boolean', { allowNull: true }) hasEntranceGutters: boolean | undefined | null;
  @attr('boolean', { allowNull: true }) hasRevolvingDoor: boolean | undefined | null;
  @attr('number') doorWidth: number | undefined | null;
  @attr('number') hasEntranceCheck: number | undefined | null;
  @attr('number') turningRadiusAtDoor: number | undefined | null;
  @attr('number') heightOfLoweredCounter: number | undefined | null;

  @belongsTo('point-of-interest') pointOfInterest!: PointOfInterest;
  @belongsTo('concept') forceForOpeningDoorCategory: Concept | undefined | null;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'entrance': EntranceModel;
  }
}
