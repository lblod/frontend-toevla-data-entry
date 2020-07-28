import Model, { attr } from '@ember-data/model';

export default class RouteDescriptionModel extends Model {
  @attr('boolean') hasFlemishSignLanguage;
  @attr('boolean') hasDetailedDescription;
  @attr('boolean') hasScreenreader;
}
