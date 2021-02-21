import Model, { attr } from '@ember-data/model';

export default class AuditoriumModel extends Model {
  @attr('boolean', { allowNull: true }) hasAccessibleSeating;
  @attr('boolean', { allowNull: true }) extraAttentionGivenToAcoustics;
  @attr('boolean', { allowNull: true }) hasTeleloop;
}
