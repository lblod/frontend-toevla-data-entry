import { inject as service } from '@ember/service';
import SessionService from 'ember-simple-auth/services/session';

export default class ExtendedSessionService extends SessionService {
  @service currentAccount;

  async handleAuthentication() {
    // inform currentAccount service
    console.log("Fetching current account");
    this.currentAccount.fetch();

    super.handleAuthentication( ...arguments );
  }

  async handleInvalidation() {
    // inform currentAccount service
    console.log("Fetching current account");
    this.currentAccount.clear();

    super.handleInvalidation( ... arguments );
  }
}
