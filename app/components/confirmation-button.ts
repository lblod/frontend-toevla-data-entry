import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

interface ConfirmationButtonArgs {
  onConfirm: () => any;
  state: string;
}

export default class ConfirmationButton extends Component<ConfirmationButtonArgs> {
  @tracked state = "init";

  @action click(event : Event) {
    event.preventDefault();
    switch (this.state) {
      case "init":
        this.state = "unconfirmed";
        break;
      case "unconfirmed":
        this.state = "confirmed";
        this.args.onConfirm();
        break;
    }
  }

  @action cancelClick(event : Event) {
    event.preventDefault();
    this.state = "init";
  }
}
