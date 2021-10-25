import { helper } from '@ember/component/helper';
import formatRelative from 'date-fns/formatRelative';
import nlBe from 'date-fns/locale/nl-BE';


export default helper(function relativeTime([date]/*, hash*/) {
  return formatRelative(date, new Date(), { locale: nlBe });;
});
