import Model, { attr, belongsTo } from '@ember-data/model';
import TreeNode from './tree-node';
import Experience from './experience';

export default class ExperienceTreeNodeScore extends Model {
  @attr('string') score: string | null | undefined;
  @belongsTo('tree-node') treeNode: TreeNode | null | undefined;
  @belongsTo('experience') experience: Experience | null | undefined;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'experience-tree-node-score': ExperienceTreeNodeScore;
  }
}
