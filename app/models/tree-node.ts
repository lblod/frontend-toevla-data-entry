import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TreeNode extends Model {
  @attr('string') uri: string | undefined;
  @attr('string') title: string | undefined;
  @attr('number') order: number | undefined;
  @attr('string') htmlContent: string | undefined;

  @attr('string') firstScore;
  @attr('string') firstLimit;
  @attr('string') firstLabel;
  @attr('string') secondScore;
  @attr('string') secondLimit;
  @attr('string') secondLabel;
  @attr('string') thirdScore;
  @attr('string') thirdLimit;
  @attr('string') thirdLabel;

  @belongsTo('tree-node', { inverse: null }) parent: TreeNode | undefined;
  @hasMany('tree-node', { inverse: null }) children: Promise<TreeNode[]> | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'tree-node': TreeNode;
  }
}
