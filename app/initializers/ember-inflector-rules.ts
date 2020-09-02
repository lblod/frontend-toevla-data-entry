import Application from '@ember/application';
import Inflector from 'ember-inflector';

export function initialize(_application: Application): void {
  Inflector.inflector.irregular("point-of-interest", "points-of-interest");
  Inflector.inflector.irregular("auditorium", "auditoria");
}

export default {
  initialize
};
