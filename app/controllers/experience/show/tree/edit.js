import { get } from '@ember/object';
import { set } from '@ember/object';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { editMapping } from 'frontend-toevla-data-entry/utils/custom-component-mapping';
import { yes, no, info } from 'frontend-toevla-data-entry/utils/uris/criterion-codelist';

export default class ExperienceShowTreeEditController extends Controller {
  @tracked internalScore = null;
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

  @tracked internalComment = null;
  @tracked didSetComment = false;
  get currentComment(){
    if( this.didSetComment ) {
      return this.internalComment;
    } else {
      return this.model.scoring?.comment;
    }
  }
  set currentComment(comment){
    comment = comment == "" ? null : comment;
    this.didSetComment = true;
    this.internalComment = comment;
    if( this.model.scoring )
      this.model.scoring.comment = comment;
  }

  get extendedEditInfo() {
    return editMapping( this.model.treeNode.uri );
  }

  get scoreOptions() {
    return [
      { value: yes, label: "Ja" },
      { value: no, label: "Nee" },
      { value: info, label: "Info" },
      { value: null, label: "Geen selectie" }
    ];
  }

  @action
  async uploaded( file ) {
    this.ensureScoringModel();
    await this.model.scoring.save();
    this.model.scoring.images.pushObject(file);
    this.model.scoring.save();
    const poi = await this.model.experience.pointOfInterest;
    get( poi, "images" ).pushObject(file);
    poi.save();
  }

  @action
  selectScore( score ) {
    this.currentScore = score;
  }

  @action
  reset(){
    console.log("we should reset");
  }

  @action
  submit( event ) {
    event.preventDefault();
    this.ensureScoringModel();
    this.model.scoring.save();
  }

  @action
  removeFile(image) {
    console.error(`removefile is not implemented yet in /app/controllers/experience/show/tree/edit.js`);
  }

  ensureScoringModel() {
    if( ! this.model.scoring )
      set( this.model, "scoring",
           this.store.createRecord('experience-tree-node-score', {
             score: this.internalScore,
             comment: this.internalComment,
             experience: this.model.experience,
             treeNode: this.model.treeNode
           }));
  }
}
