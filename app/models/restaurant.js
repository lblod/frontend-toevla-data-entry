import Model, { attr } from '@ember-data/model';

export default class RestaurantModel extends Model {
  @attr('string') comment;
  @attr('number') heightUnderTarraceTableForWheelchairInConsumptionSpace;
  @attr('number') highestThresholdForTerrace;
  @attr('number') smallestPointOnRouteForTarrace;
  @attr('number') mostNarrowDoorWidthForTerrace;
  @attr('number') heightUnderTableForWheelchairInConsumptionSpace;
  @attr('number') highestThresholdOnRouteToConsumptionSpace;
  @attr('number') smallestPointOnRouteToConsumptionSpace;
  @attr('number') mostNarrowDoorWidthInConsumptionSpace;
  @attr('boolean', { allowNull: true }) hasChildSeat;
  @attr('boolean', { allowNull: true }) hasChildrenMenu;
  @attr('boolean', { allowNull: true }) hasInformationOnAllergenics;
  @attr('boolean', { allowNull: true }) hasDietBasedMeasAdjustment;
  @attr('boolean', { allowNull: true }) hasMenuAvailableWithPictures;
  @attr('boolean', { allowNull: true }) hasMenuAvailableInBraille;
  @attr('boolean', { allowNull: true }) hasMenuVisuallyClearToRead;
  @attr('boolean', { allowNull: true }) hasMenuAvailableOnline;
  @attr('boolean', { allowNull: true }) hasSpaceSuitedForGroupsWithMobileLimitation;
  @attr('number') amountOfSeatingPlaces;
  @attr('boolean', { allowNull: true }) hasPaymentWithFixedElectronicPaymentSystem;
  @attr('boolean', { allowNull: true }) hasPaymentWithMovableElectronicPaymentSystem;
  @attr('boolean', { allowNull: true }) hasCashPayment;
  @attr('boolean', { allowNull: true }) hasOnlineOrderingAndPaymentOption;
}
