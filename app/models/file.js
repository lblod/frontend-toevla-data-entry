import Model, { attr, belongsTo } from '@ember-data/model';

export default class FileModel extends Model {
  @attr('string') label;
  @attr('string') description;
  @belongsTo('point-of-interest') pointOfInterest;
  @belongsTo('experience-tree-node-score', { inverse: "images" }) experienceTreeNodeScore;
  @attr('number') order;
}
