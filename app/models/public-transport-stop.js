import Model, { attr } from '@ember-data/model';

export default class PublicTransportStopModel extends Model {
  @attr('string') distanceFromLocation;
  @attr('string') stopName;
}
