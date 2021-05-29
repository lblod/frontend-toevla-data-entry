import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import fetch, { Headers } from 'fetch';

export default class SessionRolesRoute extends Route {
  @service('session') sessionService;
  @service currentAccount;

  beforeModel(transition) {
    return this.sessionService.requireAuthentication(transition, 'login');
  }

  async model() {
    return (await
      (await fetch('/session/roles', {
        headers: new Headers({
          accept: "application/vnd.api+json"
        })
      })).json()).data;
  }

  afterModel() {
    this.currentAccount.fetch();
  }
}
