import Model, { attr, belongsTo } from '@ember-data/model';

export default class GuidedTourModel extends Model {
  @belongsTo('concept') supportForVisualHandicap;
  @belongsTo('concept') supportForAuditiveHandicap;
  @belongsTo('concept') supportForDeaf;
  @belongsTo('concept') supportForMentalHandicap;
  @belongsTo('concept') supportForDementia;
  @belongsTo('concept') supportForAutism;
  @belongsTo('concept') supportForChildren;
  @belongsTo('concept') availabilityOnQuiteMoments;
  @belongsTo('concept') availabilityOfTailorMadeTours;
}
