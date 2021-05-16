import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @service session;
  @service router;

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
