import Model from '@ember-data/model';

export default class RoleModel extends Model {

  get isValidator() {
    return false;
  }

  get isDataEntry() {
    return false;
  }
}
