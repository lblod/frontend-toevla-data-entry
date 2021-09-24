import Model, { attr, belongsTo } from '@ember-data/model';
import PointOfInterest from './point-of-interest';
import Concept from ',/concepts';
import Area from './area';

export default class RestaurantModel extends PointOfInterest {
  get restaurant() {
    return this;
  }

  @attr('string') comment;
  @attr('number') heightUnderTarraceTableForWheelchairInConsumptionSpace;
  @attr('number') highestThresholdForTerrace;
  @attr('number') smallestPointOnRouteForTarrace;
  @attr('number') mostNarrowDoorWidthForTerrace;
  @attr('number') heightUnderTableForWheelchairInConsumptionSpace;
  @attr('number') amountOfThresholds;
  @attr('number') amountOfStairs;
  @attr('number') amountOfSlopes;
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

  // new for resto
  @attr('boolean', { allowNull: true }) hasTakeAwayService;
  @attr('boolean', { allowNull: true }) hasHomeDelivery;
  @attr('boolean', { allowNull: true }) onlySelfService;
  @attr('boolean', { allowNull: true }) hasMicrowaveAvailable;
  @attr('boolean', { allowNull: true }) hasKidPlayCorner;
  @attr('boolean', { allowNull: true }) everythingOnGroundFloorOrWithPlateauElevator;
  @attr('boolean', { allowNull: true }) hasWheelchairFriendlyTable;
  @attr('number') heightUnderTableForWheelchairInConsumptionSpace;
  @attr('boolean', { allowNull: true }) onlyHasHighTables;
  @attr('boolean', { allowNull: true }) hasTableSquareWithSupportsOnCorners;
  @attr('boolean', { allowNull: true }) hasTableSquareWithCentralSupport;
  @attr('boolean', { allowNull: true }) hasTableRoundWithCentralSupport;
  @attr('string') commentOnConsumptionSpace;
  @attr('boolean', { allowNull: true }) hasCoveredTerrace;
  @attr('boolean', { allowNull: true }) terraceAccessibleFromOutside;
  @attr('boolean', { allowNull: true }) tarraceAccessibleThroughConsumptionSpace;
  @attr('boolean', { allowNull: true }) noTarraceAvailable;
  @attr('boolean', { allowNull: true }) onlyHasHighTablesOnTerrace;
  @attr('boolean', { allowNull: true }) hasTableSquareWithSupportsOnCornersOnTerrace;
  @attr('boolean', { allowNull: true }) hasTableSquareWithCentralSupportOnTerrace;
  @attr('boolean', { allowNull: true }) hasTableRoundWithCentralSupportOnTerrace;
  @attr('boolean', { allowNull: true }) heightUnderTableForWheelchairOnTerrace;
  @attr('boolean', { allowNull: true }) hasWheelchairFriendlyTableOnTerrace;
  @attr('string') commentOnTerrace;
  @attr('boolean', { allowNull: true }) hasConferenceRoom;
  @attr('boolean', { allowNull: true }) hasPlayground;
  @attr('boolean', { allowNull: true }) hasBallroom;
  @attr('string') commentOnExtraFacilities;

  @belongsTo('concept') reservationOptions;
  @belongsTo('area') sizeOfElevator;
  @belongsTo('area') sizeOfPlateauElevator;
}
