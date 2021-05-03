import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/concept';
import Scorable from 'frontend-toevla-data-entry/models/scorable';
import mapping from 'frontend-toevla-data-entry/utils/custom-component-mapping';
import Statechart from 'ember-statecharts/utils/statechart';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';
import treeNodeMachine from 'frontend-toevla-data-entry/machines/tree-node-machine';

interface TreeNodeArgs {
  title: string | undefined;
  node: TreeNode;
  subject: Scorable;
  disableHandlerComponent: boolean | undefined;
}

export default class TreeNodeComponent extends Component<TreeNodeArgs> {
  @statechart( treeNodeMachine ) statechart!: Statechart;

  @handler()
  loadChildren(){
    get( this.args.node, "children" )
      .then( () => this.statechart.send("LOADED") )
      .catch( () => this.statechart.send("ERROR") );
  }

  get handlerComponent(): string | null {
    if( this.args.disableHandlerComponent )
      return null;
    else
      return mapping( this.args.node.uri );
  }

  get sortedChildren(){
    return this.args.node?.children?.sortBy("order");
  }

  @tracked
  isOpen:boolean = false;

  @action
  toggleIsOpen(){
    this.isOpen = !this.isOpen;
  }

  @action
  sidebarFocus(){
    var sidebarFocusTarget = document.querySelector('.au-c-action-sidebar');

    if (sidebarFocusTarget) {
      sidebarFocusTarget.focus();
    }
  }

  get nodeTitle(){
    return this.args.title || this.args.node.title;
  }
}
