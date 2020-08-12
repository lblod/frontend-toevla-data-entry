import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class TreeComponentsCirculationComponent extends Component {
  @tracked realNode;
  @service store

  constructor(){
    super(...arguments);
    this.fetchRealNode();
  }

  async fetchRealNode(){
    const nodes = await this
      .store
      .query( "tree-node", {
        filter: { ":uri:": "https://data.toevla.org/id/concepts/02ab2a7a-128f-468f-9021-2174181b3e13" }
      });

    this.realNode = nodes.firstObject;
  }
}
