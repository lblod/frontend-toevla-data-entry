import { helper } from '@ember/component/helper';

export default helper(function not([param]/*, hash*/) {
  return !param;
});
