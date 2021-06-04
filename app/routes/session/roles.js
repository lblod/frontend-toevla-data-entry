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
    const res = await fetch('/session/roles', {
      headers: new Headers({
        accept: "application/vnd.api+json"
      })});

    if (res.status !== 200) {
      this.sessionService.invalidate();
      return;
    } else {
      try {
        return (await res.json()).data;
      } catch (e) {
        await this.sessionService.invalidate();
      }
    }
  }

  afterModel() {
    this.currentAccount.fetch();
  }
}
