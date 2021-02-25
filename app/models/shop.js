import Model, { attr } from '@ember-data/model';

export default class ShopModel extends Model {
  @attr('string') comment;
  @attr('boolean', { allowNull: true }) hasCashPayment;
  @attr('boolean', { allowNull: true }) hasPaymentWithMovableElectronicPaymentSystem;
  @attr('boolean', { allowNull: true }) hasPaymentWithFixedElectronicPaymentSystem;
  @attr('number') smallestPointOnRoute;
  @attr('number') highestThreshold;
  @attr('number') mostNarrowDoorwidth;
  @attr('number') accessControlWidth;
  @attr('number') heightOfLoweredCounter;
}
