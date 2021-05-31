import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import fetch from 'fetch';
import { sort } from '@ember/object/computed';

export default class SessionRolesController extends Controller {
  @service currentAccount;
  @service router;

  @sort('model', (a,b) =>
    a.type !== b.type
      ? a.type < b.type
      : a.attributes.concatenatedPoiName > b.attributes.concatenatedPoiName)
  sortedModel;

  @action
  async chooseRole( roleId ) {
    this.store.unloadAll();

    await fetch("/session/role", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        data: {
          id: roleId,
          type: "roles"
        }
      })
    });
    await this.currentAccount.fetch();

    this.router.transitionTo("poi");
  }
}
