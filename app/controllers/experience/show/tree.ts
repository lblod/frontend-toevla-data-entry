import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import Tree from 'frontend-toevla-data-entry/models/tree';
import Experience from 'frontend-toevla-data-entry/models/experience';

export default class ExperienceShowTree extends Controller {
  @tracked model!: Tree ;
  @tracked experience!: Experience;

  get sortedNodes() {
    return this.model?.topLevelNodes?.sortBy("order");
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'experience/show/tree': ExperienceShowTree;
  }
}
