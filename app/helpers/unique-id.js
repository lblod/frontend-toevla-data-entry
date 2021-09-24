import { helper } from '@ember/component/helper';

let counter=0;

export default helper(function uniqueId(params/*, hash*/) {
  return `unique-id-${counter++}`;
});
