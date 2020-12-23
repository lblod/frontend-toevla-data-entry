import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class PoiShowTreeEditRoute extends Route {
  @service store;

  async model( { tree_node_id: treeNodeId, scorable_id: scorableId } ) {
    const subject = (await this.store.query("scorable", { "filter[:id:]": scorableId })).firstObject;
    const treeNode = await this.store.find("concept", treeNodeId);
    const scoring =
          (await this.store.query("experience-tree-node-score", {
            "filter[subject][:id:]": scorableId,
            "filter[tree-node][:id:]": treeNodeId
          })).firstObject;

    return { subject, treeNode, scoring };
  }

  setupController(controller) {
    super.setupController(...arguments);

    controller.reset();
  }
}
