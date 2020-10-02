import Component from '@glimmer/component';

export default class CriteriaSelectCriterionComponent extends Component {
  // this.args.treeNode
  // this.args.value

  get templateString() {
    const value = this.args.value;
    const treeNode = this.args.treeNode;

    if( this.args.treeNode ) {
      if( this.valueMatchesString( value, treeNode.firstLimit ) ) {
        return treeNode.firstLabel;
      } else if( this.valueMatchesString( value, treeNode.secondLimit ) ) {
        return treeNode.secondLabel;
      } else if( this.valueMatchesString( value, treeNode.thirdLimit ) ) {
        return treeNode.thirdLabel;
      }
    }
  }

  /**
   * Returns truethy iff value matches with the specified constraint.
   */
  valueMatchesString( value, string ) {
    let regexMatch;

    if( !string || string == "undefined" ) {
      return;
    } else {
      if( (regexMatch = string.match( /<= (\d+)/) ) ) {
        // <=
        const constraint = parseInt(regexMatch[1]);
        return value <= constraint;
      } else if ( (regexMatch = string.match( /< (\d+)/) ) ) {
        // <
        const constraint = parseInt(regexMatch[1]);
        return value < constraint;
      } else if ( (regexMatch = string.match( /> (\d+)/) ) ) {
        // >
        const constraint = parseInt(regexMatch[1]);
        return value > constraint;
      } else if ( (regexMatch = string.match( />= (\d+)/) ) ) {
        // >=
        const constraint = parseInt(regexMatch[1]);
        return value >= constraint;
      }
    }
  }
}
