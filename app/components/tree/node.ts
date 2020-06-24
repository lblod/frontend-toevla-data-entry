import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/experience';
import mapping from 'frontend-toevla-data-entry/utils/custom-component-mapping';
import Statechart from 'ember-statecharts/utils/statechart';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';

interface TreeNodeArgs {
  node: TreeNode;
  experience: Experience;
}

export default class TreeNodeComponent extends Component<TreeNodeArgs> {
  @statechart(
    {
      initial: "collapsed",
      states: {
        collapsed: {
          on: {
            "TOGGLE_OPEN": "loading"
          }
        },
        loading: {
          entry: ["loadChildren"],
          on: {
            "LOADED": "open",
            "ERROR": "error",
            "COLLAPSE": "collapsed"
          }
        },
        open: {
          on: {
            "TOGGLE_OPEN": "collapsed"
          }
        },
        error: {}
      }
    }
  ) statechart!: Statechart;

  @handler()
  loadChildren(){
    get( this.args.node, "children" )
      .then( () => this.statechart.send("LOADED") )
      .catch( () => this.statechart.send("ERROR") );
  }

  get handlerComponent(): string | null {
    return mapping( this.args.node.uri );
  }

  @tracked
  isOpen:boolean = false;

  @action
  toggleIsOpen(){
    this.isOpen = !this.isOpen;
  }
}
