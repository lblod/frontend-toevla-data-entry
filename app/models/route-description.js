import Model, { attr } from '@ember-data/model';

export default class RouteDescriptionModel extends Model {
  @attr('boolean', { allowNull: true }) hasFlemishSignLanguage;
  @attr('boolean', { allowNull: true }) hasDetailedDescription;
  @attr('boolean', { allowNull: true }) hasScreenreader;
}
