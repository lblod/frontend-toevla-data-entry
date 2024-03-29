import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ConceptScheme extends Model {
  @attr('string') uri: string | undefined;
  @attr('string') title: string | undefined;
  @attr('string') selectableLabel: string | undefined;

  @attr('number') order: number | undefined;
  @attr('string') criterionType: string | undefined;
  @attr('string') dataEntryComment: string | undefined;
  @attr('boolean', { allowNull: true }) isCompulsory: boolean | undefined;

  @attr('string') firstScore;
  @attr('string') firstLimit;
  @attr('string') firstLabel;
  @attr('string') secondScore;
  @attr('string') secondLimit;
  @attr('string') secondLabel;
  @attr('string') thirdScore;
  @attr('string') thirdLimit;
  @attr('string') thirdLabel;

  @attr('string') manualHyperlink;
  @attr('boolean', { allowNull: true }) declare isCriteriumForMentallyChallenged: boolean | null;
  @belongsTo('concept', { inverse: null }) parent: Concept | undefined;
  @hasMany('concept', { inverse: null }) children: Promise<Concept[]> | undefined;
  @hasMany('concept', { inverse: null }) targetAudiences: Concept[];
  @hasMany('concept', { inverse: null }) simplifiedTargetAudiences: Concept[];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'concept-scheme': ConceptScheme;
  }
}
