import { get } from '@ember/object';
import { helper } from '@ember/component/helper';

function emberDataObjectInArray( item, emberDataArray ) {
  return emberDataArray.findBy( "id", get( item, "id" ) ) && true;
}

export default helper(function ([item, emberDataArray]/*, hash*/) {
  return emberDataObjectInArray( item, emberDataArray );
});

export { emberDataObjectInArray };
