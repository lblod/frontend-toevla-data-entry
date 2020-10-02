import { helper } from '@ember/component/helper';

export default helper(function parseInteger([value]/*, hash*/) {
  if( value ) {
    return parseInt( value );
  } else {
    return undefined;
  };
});
