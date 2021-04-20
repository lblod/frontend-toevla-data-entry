import { helper } from '@ember/component/helper';

export default helper(function gt([left,right]/*, hash*/) {
  return left > right;
});
