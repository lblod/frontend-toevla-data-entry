import Route from '@ember/routing/route';
import Experience from 'frontend-toevla-data-entry/models/experience';

export default class ExperienceEditTreeNode extends Route {
  async model( { tree_node_id: treeNodeId } : { tree_node_id: string } ) {
    const experience = this.modelFor("experience.edit") as Experience;
    const treeNode = await this.store.findRecord('concept', treeNodeId);
    const scoring = (await this.store.query('experience-tree-node-score', {
      "filter[subject][:id:]": experience.id,
      "filter[tree-node][:id:]": treeNode.id
    }))?.firstObject

    return { experience, treeNode, scoring }
  }
}
