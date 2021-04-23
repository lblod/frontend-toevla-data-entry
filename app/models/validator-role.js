import Model from '@ember-data/model';
import Role from './role';

export default class ValidatorRoleModel extends Role {
  get isValidator() {
    return true;
  }
}
