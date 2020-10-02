import Component from '@glimmer/component';
import { valueMatchesSimpleNumericString as valueMatchesString } from '../../utils/criterion-matching';

export default class CriteriaSelectCriterionComponent extends Component {
  // this.args.treeNode
  // this.args.value

  get templateString() {
    const value = this.args.value;
    const treeNode = this.args.treeNode;

    if( this.args.treeNode ) {
      if( valueMatchesString( value, treeNode.firstLimit ) ) {
        return treeNode.firstLabel;
      } else if( valueMatchesString( value, treeNode.secondLimit ) ) {
        return treeNode.secondLabel;
      } else if( valueMatchesString( value, treeNode.thirdLimit ) ) {
        return treeNode.thirdLabel;
      }
    }
  }
}
