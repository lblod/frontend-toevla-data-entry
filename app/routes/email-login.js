import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class EmailLoginRoute extends Route {
  @service session;

  async model( params ) {
    const { email, key } = params;

    try {
      await this.session.authenticate('authenticator:email-login', email, key);
      this.transitionTo('/session/roles');
    } catch (e) {
      this.transitionTo('/');
    }
  }
}
