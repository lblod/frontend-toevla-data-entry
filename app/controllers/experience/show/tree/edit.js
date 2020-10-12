import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { editMapping } from 'frontend-toevla-data-entry/utils/custom-component-mapping';

export default class ExperienceShowTreeEditController extends Controller {
  @tracked internalScore = null;
  @tracked internalComment = null;
  @tracked showComponent = false;

  get currentScore(){
    return this.model.scoring?.score || this.internalScore;
  }
  set currentScore(score){
    if( this.model.scoring )
      this.model.scoring.score = score;
    else
      this.internalScore = score;
  }

  get currentComment(){
    return this.model.scoring?.comment || this.internalComment;
  }
  set currentComment(comment){
    if( this.model.scoring )
      this.model.scoring.comment = comment;
    else
      this.internalComment = comment;
  }

  get extendedEditInfo() {
    return editMapping( this.model.treeNode.uri );
  }

  @action
  reset(){
    console.log("we should reset");
  }

  @action submit( event ) {
    console.log("trying to submit")
    event.preventDefault();
    if( this.model.scoring )
      this.model.scoring.save();
    else {
      this.model.scoring = this.store.createRecord('experience-tree-node-score', {
        score: this.internalScore,
        comment: this.internalComment,
        experience: this.model.experience,
        treeNode: this.model.treeNode
      });
      this.model.scoring.save();
    }
  }
}
