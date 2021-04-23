import Model, { belongsTo } from '@ember-data/model';

export default class SessionModel extends Model {
  @belongsTo({inverse: null, async: false}) account;
  @belongsTo({inverse: null, polymorphic: true}) role;
}
