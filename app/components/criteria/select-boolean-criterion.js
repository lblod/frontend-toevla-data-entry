import Component from '@glimmer/component';

export default class CriteriaSelectBooleanCriterionComponent extends Component {
  get matchedIndex() {
    return this.args.value ? 1 : 2;
  }

  get matchPositive() {
    return this.matchedIndex === 1;
  }

  get rawTemplateString() {
    const treeNode = this.args.treeNode;
    switch ( this.matchedIndex ) {
    case 1:
      return treeNode.firstLabel;
    case 2:
      return treeNode.secondLabel;
    default:
      return null;
    }
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

  get templateString() {
    return ["undefined","geen weergave"].includes( this.rawTemplateString && this.rawTemplateString.toLowerCase() )
      ? null
      : this.rawTemplateString;
  }
}
