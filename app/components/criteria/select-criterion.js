import Component from '@glimmer/component';
import { valueMatchesNumericString as valueMatchesString } from '../../utils/criterion-matching';

export default class CriteriaSelectCriterionComponent extends Component {
  // this.args.treeNode
  // this.args.value

  get matchedIndex() {
    const value = this.args.value;
    const treeNode = this.args.treeNode;

    if( this.args.treeNode ) {
      if( valueMatchesString( value, treeNode.firstLimit ) ) {
        return 1;
      } else if( valueMatchesString( value, treeNode.secondLimit ) ) {
        return 2;
      } else if( valueMatchesString( value, treeNode.thirdLimit ) ) {
        return 3;
      }
    }
    return null;
  }

  get matchPositive() {
    return this.matchedIndex >= 2;
  }

  get matchScore() {
    const treeNode = this.args.treeNode;
    switch( this.matchedIndex ) {
    case 1:
      return treeNode.firstScore;
    case 2:
      return treeNode.secondScore;
    case 3:
      return treeNode.thirdScore;
    default:
      return null;
    }
  }

  get rawTemplateString() {
    const treeNode = this.args.treeNode;
    switch ( this.matchedIndex ) {
    case 1:
      return treeNode.firstLabel;
    case 2:
      return treeNode.secondLabel;
    case 3:
      return treeNode.thirdLabel;
    default:
      return null;
    }
  }

  get templateString() {
    return ["undefined","geen weergave"].includes( this.rawTemplateString && this.rawTemplateString.toLowerCase() )
      ? null
      : this.rawTemplateString;
  }
}
