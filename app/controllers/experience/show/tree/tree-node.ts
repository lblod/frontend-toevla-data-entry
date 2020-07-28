import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { editMapping } from 'frontend-toevla-data-entry/utils/custom-component-mapping';

export default class ExperienceShowTreeNode extends Controller {
  // @tracked internalScore = null;

  // get currentScore(){
  //   return this.model.scoring?.score || this.internalScore;
  // }
  // set currentScore(score){
  //   if( this.model.scoring )
  //     this.model.scoring.score = score;
  //   else
  //     this.internalScore = score;
  // }

  // get extendedEditInfo() {
  //   return editMapping( this.model.treeNode.uri );
  // }

  // @action submit( event: Event ) {
  //   event.preventDefault();
  //   if( this.model.scoring )
  //     this.model.scoring.save();
  //   else {
  //     this.model.scoring = this.store.createRecord('experience-tree-node-score', {
  //       score: this.internalScore,
  //       experience: this.model.experience,
  //       treeNode: this.model.treeNode
  //     });
  //     this.model.scoring.save();
  //   }
  // }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'experience/show/tree-node': ExperienceEditTreeNode;
  }
}
