import Model, { belongsTo } from '@ember-data/model';
import Role from './role';

export default class DataEntryRoleModel extends Role {
  @belongsTo() pointOfInterest;

  get isDataEntry() {
    return true;
  }
}
