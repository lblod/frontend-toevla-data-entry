import { helper } from '@ember/component/helper';

export default helper(function and(params/*, hash*/) {
  return params.every( (x) => x );
});
