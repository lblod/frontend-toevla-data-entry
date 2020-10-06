import Model, { belongsTo, attr } from '@ember-data/model';

export default class WidgetModel extends Model {
  @attr('string') uri;
  @belongsTo('point-of-interest') pointOfInterest;
}
