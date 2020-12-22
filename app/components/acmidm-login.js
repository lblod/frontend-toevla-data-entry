import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { warn } from '@ember/debug';

export default class AcmidmLoginComponent extends Component {
  @service session;

  @tracked errorMessage;
  @tracked isAuthenticating;

  @action
  async login() {
    this.errorMessage = null;
    this.isAuthenticating = true;

    try {
      await this.session.authenticate('authenticator:torii', 'acmidm-oauth2');
    } catch( reason ) {
      if (reason.status == 403)
        this.errorMessage = 'U heeft geen toegang tot deze applicatie.';
      else
        this.errorMessage = 'Fout bij het aanmelden. Gelieve opnieuw te proberen.';
    } finally {
      this.isAuthenticating = false;
    }
  }
}
