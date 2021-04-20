import { helper } from '@ember/component/helper';

export default helper(function lt([left,right]/*, hash*/) {
  return left < right;
});
