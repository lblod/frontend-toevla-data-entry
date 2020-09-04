import Route from '@ember/routing/route';
import Experience from 'frontend-toevla-data-entry/models/experience';

export default class ExperienceShowTreeEditRoute extends Route {
  async model( { tree_node_id: treeNodeId } ) {
    const experience = this.modelFor("experience.show");
    const treeNode = await this.store.findRecord('tree-node', treeNodeId);
    const scoring =
      (await this.store.query('experience-tree-node-score', {
        "filter[experience][:id:]": experience.id,
        "filter[tree-node][:id:]": treeNode.id
      })).firstObject;

    return { experience, treeNode, scoring };
  }

  async afterModel({ scoring }){
    scoring.entryVisited = true;
    scoring.save();
  }
}
