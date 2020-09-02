import Model, { attr } from '@ember-data/model';

export default class AuditoriumModel extends Model {
  @attr('boolean') hasAccessibleSeating;
  @attr('boolean') extraAttentionGivenToAcoustics;
  @attr('boolean') hasTeleloop;
}
