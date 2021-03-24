import Model, { attr, belongsTo } from '@ember-data/model';
import Area from './area';
import Concept from './concept';

export default class Toilet extends Model {
  @attr('string') comment: string | null | undefined;
  @attr('boolean', { allowNull: true }) hasSimpleAndLogicalRoute: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasSyntheticSpeechInElevator: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasClearSignalizationInBuilding: boolean | null | undefined;
  @attr('boolean', { allowNull: true }) hasBabyNurturingTable: boolean | null | undefined;
  @attr('number') smallestPointOnRoute: number | null | undefined;
  @attr('number') highestThresholdOnRoute: number | null | undefined;
  @attr('number') amountOfThresholds: number | null | undefined;
  @attr('number') amountOfStairs: number | null | undefined;
  @attr('number') amountOfSlopes: number | null | undefined;
  @attr('boolean', { allowNull: true }) hasRamps: boolean | null | undefined;
  @attr('number') amountOfPlateauElevators: number | null | undefined;
  @attr('string') typeOfElevator: string | null | undefined;
  @attr('number') doorWidth: number | null | undefined;
  @attr('number') turningRadiusAtDoor: number | null | undefined;
  @attr('number') spaceInFrontOfToilet: number | null | undefined;
  @attr('number') spaceNextToToilet: number | null | undefined;
  @attr('number') turningRadius: number | null | undefined;
  @attr('number') amountOfSupportBraces: number | null | undefined;
  @attr('boolean', { allowNull: true }) hasWashbasin: boolean | null | undefined;
  @belongsTo('area') sizeOfElevator: Area | null | undefined;
  @belongsTo('area') sizeOfPlateauElevator: Area | null | undefined;
  @belongsTo('area') sizeOfToiletRoom: Area | null | undefined;
  @belongsTo('concept') canRideUnderWashbasinCategory: Concept | null | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'toilet': Toilet;
  }
}
