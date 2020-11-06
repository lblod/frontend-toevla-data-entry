import Component from '@glimmer/component';

export default class CriteriaSelectStringCriterionComponent extends Component {
  get matchedIndex() {
    const value = this.args.value;
    const treeNode = this.args.treeNode;

    if( this.args.treeNode ) {
      if( value && value != "" ) {
        return 1;
      } else {
        return 2;
      }
    }
    return null;
  }

  get matchPositive() {
    return this.matchedIndex == 1;
  }

  get matchScore() {
    const treeNode = this.args.treeNode;
    switch( this.matchedIndex ) {
    case 1:
      return treeNode.firstScore;
    case 2:
      return treeNode.secondScore;
    default:
      return null;
    }
  }

  get rawTemplateString() {
    const treeNode = this.args.treeNode;
    switch ( this.matchedIndex ) {
    case 1:
      return this.args.value;
    case 2:
      return treeNode.secondLabel;
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
