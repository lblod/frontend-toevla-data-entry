import Component from '@glimmer/component';
import { valueMatchesAreaString } from '../../utils/criterion-matching';

export default class CriteriaSelectAreaCriterionComponent extends Component {
  // this.args.treeNode
  // this.args.value

  get templateString() {
    const value = this.args.value;
    const treeNode = this.args.treeNode;

    if( this.args.treeNode ) {
      if( valueMatchesAreaString( value, treeNode.firstLimit ) ) {
        return treeNode.firstLabel;
      } else if( valueMatchesAreaString( value, treeNode.secondLimit ) ) {
        return treeNode.secondLabel;
      } else if( valueMatchesAreaString( value, treeNode.thirdLimit ) ) {
        return treeNode.thirdLabel;
      }
    }
  }
}
