import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/experience';
import mapping from 'frontend-toevla-data-entry/utils/custom-component-mapping';

interface TreeNodeArgs {
  node: TreeNode;
  experience: Experience;
}

export default class TreeNodeComponent extends Component<TreeNodeArgs> {
  constructor(){
    super(...arguments);
  }

  get handlerComponent(): string | null {
    return mapping( this.args.node.uri );
  }
}
