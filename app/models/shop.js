import Model, { attr } from '@ember-data/model';

export default class ShopModel extends Model {
  @attr('boolean') hasCashPayment;
  @attr('boolean') hasPaymentWithMovableElectronicPaymentSystem;
  @attr('boolean') hasPaymentWithFixedElectronicPaymentSystem;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThreshold;
  @attr('number') mostNarrowDoorwidth;
  @attr('number') accessControlWidth;
  @attr('number') heightOfLoweredCounter;
}
