import Model, { attr } from '@ember-data/model';

export default class GuidedTourModel extends Model {
  @attr('boolean', { allowNull: true }) isAvailableOnQuietMoments;
  @attr('boolean', { allowNull: true }) hasFlemishSignLanguageInterpreter;
  @attr('boolean', { allowNull: true }) hasImageInterpreter;
  @attr('boolean', { allowNull: true }) hasAdaptationsForChildren;
  @attr('boolean', { allowNull: true }) hasAdaptationsForElderly;
  @attr('boolean', { allowNull: true }) isAutismFriendly;
  @attr('boolean', { allowNull: true }) isDementiaFriendly;
  @attr('boolean', { allowNull: true }) hasSupportForMentalHandicap;
  @attr('boolean', { allowNull: true }) hasSupportForAuditiveHandicap;
  @attr('boolean', { allowNull: true }) hasSupportForVisualHandicap;
  @attr('boolean', { allowNull: true }) isAvailableTailorMade;
}
