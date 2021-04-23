import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import fetch from 'fetch';

export default class SessionRolesController extends Controller {
  @service currentAccount;
  @service router;

  @action
  async chooseRole( role ) {
    this.store.unloadAll();

    await fetch("/sessions/role", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        data: {
          id: role.id,
          type: "roles"
        }
      })
    });
    await this.currentAccount.fetch();

    this.router.transitionTo("poi");
  }
}
