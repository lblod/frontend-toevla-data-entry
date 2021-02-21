import Model, { attr, belongsTo } from '@ember-data/model';

export default class RouteModel extends Model {
  @attr('string') comment;
  @attr('boolean', { allowNull: true }) isSimpleAndLogical;
  @attr('boolean', { allowNull: true }) hasClearSignalizationInBuilding;
  @attr('boolean', { allowNull: true }) hasSyntheticSpeechInElevator;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThresholdOnRoute;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
  @attr('boolean', { allowNull: true }) hasRamps;
  @attr('number') amountOfPlateauElevators;
  @attr('string') typeOfElevator;
  @attr('boolean', { allowNull: true }) hasMultipleRestingAndSittingOpportunities;
  @attr('boolean', { allowNull: true }) hasAlternativePathForHardToAccessSpaces;
  @attr('boolean', { allowNull: true }) hasPlanForAdvisedPath
  @attr('boolean', { allowNull: true }) hasVenuePlan;
  @attr('boolean', { allowNull: true }) hasClearSignalizationOnRoute;
  @attr('boolean', { allowNull: true }) hasExtraAttentionForAcoustics;
  @belongsTo('area') sizeOfElevator;
  @belongsTo('area') sizeOfPlateauElevator;
  @belongsTo('concept') multipleLevelsCategory;
}
