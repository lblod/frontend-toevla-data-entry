import Model, { attr } from '@ember-data/model';

export default class ShopModel extends Model {
  @attr('boolean') hasCashPayment;
  @attr('boolean') hasPaymentWithMovableElecntronicPaymentSystem;
  @attr('boolean') hasPaymentWithFixedElecntronicPaymentSystem;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThreshold;
  @attr('number') mostNarrowDoorwidth;
  @attr('boolean') hasAccessControl;
  @attr('boolean') hasLoweredCounter;
}
