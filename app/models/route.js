import Model, { attr, belongsTo } from '@ember-data/model';

export default class RouteModel extends Model {
  @attr('boolean') isSimpleAndLogical;
  @attr('boolean') hasClearSignalizationInBuilding;
  @attr('boolean') hasSyntheticSpeechInElevator;
  @attr('boolean') isOnlyOnGroundFloor;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThresholdOnRoute;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean') hasRamps;
  @attr('number') amountOfPlateauElevators;
  @attr('string') typeOfElevator;
  @belongsTo('area') sizeOfElevator;
  @belongsTo('area') sizeOfPlateauElevator;
}
