import Model, { attr, belongsTo } from '@ember-data/model';

export default class PathModel extends Model {
  @attr('boolean', { allowNull: true }) hasWheelchairFriendlyTerrain: boolean | undefined | null;
  @attr('number') narrowestPoint: number | undefined | null;
  @attr('number') highestThreshold: number | undefined | null;
  @attr('number') amountOfThresholds: number | undefined | null;
  @attr('number') amountOfStairs: number | undefined | null;
  @attr('number') amountOfSlopes: number | undefined | null;
  @attr('boolean', { allowNull: true }) hasRamp: boolean | undefined | null;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'path': PathModel;
  }
}
