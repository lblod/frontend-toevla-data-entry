import { get } from '@ember/object';
import { set } from '@ember/object';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { editMapping } from 'frontend-toevla-data-entry/utils/custom-component-mapping';
import { yes, no, info } from 'frontend-toevla-data-entry/utils/uris/criterion-codelist';

export default class ExperienceShowTreeEditController extends Controller {
  @tracked showComponent = false;

  @action
  reset() {
    this.didSetScore = false;
    this.didSetComment = false;
  }

  // -- SCORING --
  @tracked internalScore = null;
  @tracked didSetScore = false;

  get currentScore() {
    if( this.didSetScore )
      return this.internalScore;
    else
      return this.model.scoring?.score;
  }
  set currentScore(score) {
    this.didSetScore = true;
    this.internalScore = score;
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
  selectScore( score ) {
    this.currentScore = score;
  }

  // -- COMMENTS --
  @tracked internalComment = null;
  @tracked didSetComment = false;

  get currentComment(){
    if( this.didSetComment ) {
      return this.internalComment;
    } else {
      return this.model.scoring?.comment;
    }
  }
  set currentComment(comment) {
    comment = comment == "" ? null : comment;
    this.didSetComment = true;
    this.internalComment = comment;
  }

  // -- FILES --
  @action
  async uploaded( file ) {
    this.ensureScoringModel();
    await this.model.scoring.save();
    this.model.scoring.images.pushObject(file);
    this.model.scoring.save();
    const poi = await this.model.subject.pointOfInterest;
    get( poi, "images" ).pushObject(file);
    poi.save();
  }

  @action
  removeFile(image) {
    console.error(`removefile is not implemented yet in /app/controllers/experience/show/tree/edit.js`);
  }

  // -- SAVING --
  @action
  submit( event ) {
    event.preventDefault();
    this.ensureScoringModel();

    if( this.didSetScore )
      this.model.scoring.score = this.enteredScore;
    if( this.didSetComment )
      this.model.scoring.comment = this.enteredComment;

    this.model.scoring.save();
  }

  ensureScoringModel() {
    if( ! this.model.scoring )
      set( this.model, "scoring",
           this.store.createRecord('experience-tree-node-score', {
             score: this.internalScore,
             comment: this.internalComment,
             subject: this.model.subject,
             treeNode: this.model.treeNode
           }));
  }
}
