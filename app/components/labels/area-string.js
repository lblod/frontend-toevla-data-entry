import Component from '@glimmer/component';

export default class LabelsAreaStringComponent extends Component {
  // this.args.label
  // this.args.value

  get filledInTemplate(){
    if( this.args.label && this.args.value ) {
      const [y, z] = this.args.value;
      const label = this.args.label;
      return label
        .replace(/{{\s*y\s*}}/, y)
        .replace(/{{\s*z\s*}}/, z);
    }
  }
}
