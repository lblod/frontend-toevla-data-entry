import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class AuControlRadioComponent extends Component {
  get disabled() {
    if (this.args.disabled)
      return "is-disabled";
    else
      return "";
  }

  @action
  onChange(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.value);
    }
  }
}
