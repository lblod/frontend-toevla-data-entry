import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TreeNode extends Model {
  @attr('string') uri: string | undefined;
  @attr('string') title: string | undefined;
  @attr('number') order: number | undefined;
  @attr('string') htmlContent: string | undefined;
  @belongsTo('tree-node', { inverse: "children" }) parent: TreeNode | undefined;
  @hasMany('tree-node', { inverse: "parent" }) children: TreeNode[] | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'tree-node': TreeNode;
  }
}
