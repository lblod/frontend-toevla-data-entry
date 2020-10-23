import { tracked } from '@glimmer/tracking';
import Route from '@ember/routing/route';
import Experience from 'frontend-toevla-data-entry/models/experience';

/**
 * This model ensures we can have tracking for the complex model
 * object we pass through.
 */
class RouteModel {
  @tracked experience;
  @tracked treeNode;
  @tracked scoring;

  constructor( {experience, treeNode, scoring} ) {
    this.experience = experience;
    this.treeNode = treeNode;
    this.scoring = scoring;
  }
}

export default class ExperienceShowTreeEditRoute extends Route {
  async model( { tree_node_id: treeNodeId } ) {
    const experience = this.modelFor("experience.show");
    const treeNode = await this.store.findRecord('concept', treeNodeId);
    const scoring =
      (await this.store.query('experience-tree-node-score', {
        "filter[experience][:id:]": experience.id,
        "filter[tree-node][:id:]": treeNode.id
      })).firstObject;

    return { experience, treeNode, scoring };
  }

  setupController( controller ) {
    super.setupController( ...arguments );

    controller.reset();
  }
}
