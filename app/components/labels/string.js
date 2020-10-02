import Component from '@glimmer/component';

export default class LabelsStringComponent extends Component {
  get output() {
    if( this.args.value
        && this.args.value.toLowerCase() != "geen weergave" )
      return this.args.value;
    else
      return "";
  }
}
