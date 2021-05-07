import Model, { attr, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @hasMany() accounts;
}
