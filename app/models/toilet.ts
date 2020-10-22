import Model, { attr, belongsTo } from '@ember-data/model';
import Area from './area';

export default class Toilet extends Model {
  @attr('boolean') hasSimpleAndLogicalRoute: boolean | null | undefined;
  @attr('boolean') hasSyntheticSpeechInElevator: boolean | null | undefined;
  @attr('boolean') hasClearSignalizationInBuilding: boolean | null | undefined;
  @attr('boolean') hasBabyNurturingTable: boolean | null | undefined;
  @attr('number') smallestPointOnRoute: number | null | undefined;
  @attr('number') highestThresholdOnRoute: number | null | undefined;
  @attr('number') amountOfThresholds: number | null | undefined;
  @attr('number') amountOfStairs: number | null | undefined;
  @attr('number') amountOfSlopes: number | null | undefined;
  @attr('boolean') hasRamps: boolean | null | undefined;
  @attr('number') amountOfPlateauElevators: number | null | undefined;
  @attr('string') typeOfElevator: string | null | undefined;
  @attr('number') doorWidth: number | null | undefined;
  @attr('number') turningRadiusAtDoor: number | null | undefined;
  @attr('number') spaceInFrontOfToilet: number | null | undefined;
  @attr('number') spaceNextToToilet: number | null | undefined;
  @attr('number') turningRadius: number | null | undefined;
  @attr('number') amountOfSupportBraces: number | null | undefined;
  @attr('boolean') hasWashbasin: boolean | null | undefined;
  @attr('number') freeHeightUnderWashbasin: number | null | undefined;
  @attr('number') freeDepthUnderWashbasin: number | null | undefined;
  @attr('number') freeWidthUnderWashbasin: number | null | undefined;
  @belongsTo('area') sizeOfElevator: Area | null | undefined;
  @belongsTo('area') sizeOfPlateauElevator: Area | null | undefined;
  @belongsTo('area') sizeOfToiletRoom: Area | null | undefined;
  @belongsTo('concept') canRideUnderWashbasinCategory;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'toilet': Toilet;
  }
}
