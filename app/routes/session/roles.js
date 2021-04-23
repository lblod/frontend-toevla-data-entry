import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class SessionRolesRoute extends Route {
  @service('session') sessionService;
  @service currentAccount;

  beforeModel(transition) {
    return this.sessionService.requireAuthentication(transition, 'login');
  }

  afterModel() {
    this.currentAccount.fetch();
  }
}
