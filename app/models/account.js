import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr('string') email;
  @belongsTo() person;
  @hasMany('role', {polymorphic: true}) roles;
}
