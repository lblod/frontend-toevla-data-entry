import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TreeNode extends Model {
  @attr('string') uri: string | undefined;
  @attr('string') title: string | undefined;
  @attr('number') order: number | undefined;
  @attr('string') htmlContent: string | undefined;

  @attr('string') firstLimit;
  @attr('string') firstLabel;
  @attr('string') secondLimit;
  @attr('string') secondLabel;
  @attr('string') thirdLimit;
  @attr('string') thirdLabel;

  @belongsTo('tree-node', { inverse: "children" }) parent: TreeNode | undefined;
  @hasMany('tree-node', { inverse: "parent" }) children: Promise<TreeNode[]> | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'tree-node': TreeNode;
  }
}
