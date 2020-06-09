import Model, { attr, hasMany } from '@ember-data/model';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';


export default class Tree extends Model {
  @attr() title: string | undefined;
  @hasMany("tree-node") topLevelNodes: TreeNode[] | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'tree': Tree;
  }
}
