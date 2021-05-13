import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import fetch from 'fetch';

export default class LoginController extends Controller {
  @tracked emailAddress;
  @tracked requesting = false;
  @tracked requested = false;

  get disableInput() {
    return this.requesting || this.requested;
  }

  @action
  async requestLoginLink(address) {
    if (isEmpty(address)) {
      console.log("No address given");
    } else {
      this.requesting = true;
      const req = await fetch(`/email-login/emails/${encodeURIComponent(address)}/keys`, {
        method: "POST"
      });
      console.log( await req.json() );
      this.requested = true;
      this.requesting = false;
    }
  }
}
