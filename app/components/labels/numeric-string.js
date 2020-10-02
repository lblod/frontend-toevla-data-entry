import Component from '@glimmer/component';

export default class LabelsNumericStringComponent extends Component {
  // this.args.label
  // this.args.value

  get filledInTemplate(){
    if( this.args.label )
      return this.args.label.replace(/{{\s*x\s*}}/, this.args.value);
  }
}
