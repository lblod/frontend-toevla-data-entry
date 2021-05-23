import Component from '@glimmer/component';

export default class CriteriaSelectBooleanCriterionComponent extends Component {
  get matchedIndex() {
    if (this.args.value === true)
      return 1;
    else if (this.args.value === false)
      return 2;
    else return 3;
  }

  get matchPositive() {
    return this.matchedIndex === 1;
  }

  get rawTemplateString() {
    const treeNode = this.args.treeNode;
    switch (this.matchedIndex) {
      case 1:
        return treeNode.firstLabel;
      case 2:
        return treeNode.secondLabel;
      default:
        return treeNode.thirdLabel;
    }
  }

  get matchScore() {
    const treeNode = this.args.treeNode;
    switch (this.matchedIndex) {
      case 1:
        return treeNode.firstScore;
      case 2:
        return treeNode.secondScore;
      default:
        return treeNode.thirdScore;
    }
  }

  get templateString() {
    return ["undefined", "geen weergave"].includes(this.rawTemplateString && this.rawTemplateString.toLowerCase())
      ? null
      : this.rawTemplateString;
  }
}
