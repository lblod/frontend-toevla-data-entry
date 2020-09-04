import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import TreeNode from 'frontend-toevla-data-entry/models/tree-node';
import Experience from 'frontend-toevla-data-entry/models/experience';
import mapping from 'frontend-toevla-data-entry/utils/custom-component-mapping';
import Statechart from 'ember-statecharts/utils/statechart';
import { handler, statechart } from 'frontend-toevla-data-entry/utils/rockin-statechart';
import treeNodeMachine from 'frontend-toevla-data-entry/machines/tree-node-machine';

interface TreeNodeArgs {
  title: string | undefined;
  node: TreeNode;
  experience: Experience;
  disableHandlerComponent: boolean | undefined;
}

export default class TreeNodeComponent extends Component<TreeNodeArgs> {
  @statechart( treeNodeMachine ) statechart!: Statechart;
  @service store;

  @tracked _experienceTreeNodeScore;

  get treeNodeScore() {
    if( this._experienceTreeNodeScore )
      return this._experienceTreeNodeScore;
    else if( this.args.node.get('id') && this.args.experience.get('id') ) {
      const matchingScore =
        this
          .store
          .peekAll('experience-tree-node-score')
          .find( (etns) => {
            const same =
              etns.treeNode.get('id')
              && etns.experience.get('id')
              && etns.treeNode.get('id') == this.args.node.get('id')
              && etns.experience.get('id') == this.args.experience.get('id');
            if( same )
              debugger;
            return same
          });
      if( matchingScore ) {
        this._experienceTreeNodeScore = matchingScore;
        return matchingScore;
      }
      else
        this.fetchTreeNodeScoreFromStore();
    }
  }

  async fetchTreeNodeScoreFromStore() {
    const scores =
      await this
        .store
        .query( 'experience-tree-node-score',
                { filter: {
                  experience: { ":id:": this.args.experience.id },
                  "tree-node": { ":id:": this.args.node.id } } } );
    const score = await scores.firstObject;

    if( score )
      this._experienceTreeNodeScore = score;
    else if( this.args.experience.id && this.args.node.id ) {
      this._experienceTreeNodeScore =
        this
          .store
          .createRecord("experience-tree-node-score",
                        { experience: this.args.experience,
                          treeNode: this.args.node });
      this._experienceTreeNodeScore.save();
    }
  }

  constructor() {
    super(...arguments);
  }

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

  get nodeTitle(){
    return this.args.title || this.args.node.title;
  }
}
