import Route from '@ember/routing/route';

export default class ExperienceShowTreeEditRoute extends Route {
  async model( { tree_node_id: treeNodeId } ) {
    const subject = this.modelFor("experience.show");
    const treeNode = await this.store.findRecord('concept', treeNodeId);
    const scoring =
      (await this.store.query('experience-tree-node-score', {
        "filter[subject][:id:]": subject.id,
        "filter[tree-node][:id:]": treeNode.id
      })).firstObject;

    return { subject, treeNode, scoring };
  }

  setupController( controller ) {
    super.setupController( ...arguments );

    controller.reset();
  }
}
