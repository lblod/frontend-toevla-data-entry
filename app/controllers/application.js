import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { Resource, use } from  'ember-could-get-used-to-this';

class UserNameResource extends Resource {
  @tracked userName = "Username"

  get value() {
    return this.userName;
  }

  async setup() {
    try {
      const person = await this.args.positional[0];
      this.userName = `${person.firstName} ${person.lastName}`;
    } catch(e) {
      // Nothing to do, keeping default username
    }
  }
}

export default class ApplicationController extends Controller {
  @service session;
  @service router;
  @service currentAccount;

  @use username = new UserNameResource(() => [this.currentAccount.account.person]);

  @action
  logout(event) {
    event.preventDefault();
    this.session.invalidate();
  }

  @action
  selectRole(event) {
    event.preventDefault();
    this.router.transitionTo('session.roles');
  }
}
