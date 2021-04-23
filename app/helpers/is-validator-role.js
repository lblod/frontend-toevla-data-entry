import { helper } from '@ember/component/helper';
import ValidatorRole from '../models/validator-role';

export default helper(function isValidatorRole([role]/*, hash*/) {
  return role instanceof ValidatorRole;
});
