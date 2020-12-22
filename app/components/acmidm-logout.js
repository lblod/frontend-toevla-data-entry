import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class AcmidmLogoutComponent extends Component {
  @service session;

  @action
  logout() {
    this.session.invalidate();
  }
}
