import Model, { attr, belongsTo } from '@ember-data/model';

export default class RouteModel extends Model {
  @attr('string') comment;
  @attr('boolean') isSimpleAndLogical;
  @attr('boolean') hasClearSignalizationInBuilding;
  @attr('boolean') hasSyntheticSpeechInElevator;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThresholdOnRoute;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean') hasRamps;
  @attr('number') amountOfPlateauElevators;
  @attr('string') typeOfElevator;
  @attr('boolean') hasMultipleRestingAndSittingOpportunities;
  @attr('boolean') hasAlternativePathForHardToAccessSpaces;
  @attr('boolean') hasPlanForAdvisedPath
  @attr('boolean') hasVenuePlan;
  @attr('boolean') hasClearSignalizationOnRoute;
  @attr('boolean') hasExtraAttentionForAcoustics;
  @belongsTo('area') sizeOfElevator;
  @belongsTo('area') sizeOfPlateauElevator;
  @belongsTo('concept') multipleLevelsCategory;
}
