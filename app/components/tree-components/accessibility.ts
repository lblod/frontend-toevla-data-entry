import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';

interface TreeComponentsAccessibilityArgs {
  node: TreeNode
}

export default class TreeComponentsAccessibility extends Component<TreeComponentsAccessibilityArgs> {}
