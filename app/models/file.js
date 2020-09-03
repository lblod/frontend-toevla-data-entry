import Model, { attr, belongsTo } from '@ember-data/model';

export default class FileModel extends Model {
  @attr('string') label;
  @belongsTo('point-of-interest') pointOfInterest;
}
