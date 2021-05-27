import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class TransferMuseumComponent extends Component {
  @tracked showModal;
  @tracked didSend;

  @action
  async send() {
    // let's not wait until the service supports polling
    this.didSend = true;
    const resp = await fetch(this.args.path, { method: 'POST' });
    const body = await resp.json();
  }
}
