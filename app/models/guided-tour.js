import Model, { attr } from '@ember-data/model';

export default class GuidedTourModel extends Model {
  @attr('boolean') isAvailableOnQuietMoments;
  @attr('boolean') hasFlemishSignLanguageInterpreter;
  @attr('boolean') hasImageInterpreter;
  @attr('boolean') hasAdaptationsForChildren;
  @attr('boolean') hasAdaptationsForElderly;
  @attr('boolean') isAutismFriendly;
  @attr('boolean') isDementiaFriendly;
  @attr('boolean') hasSupportForMentalHandicap;
  @attr('boolean') hasSupportForAuditiveHandicap;
  @attr('boolean') hasSupportForVisualHandicap;
  @attr('boolean') isAvailableTailorMade;
}
