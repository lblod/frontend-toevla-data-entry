import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { schedule } from '@ember/runloop';

export default class NavigationNarratorComponent extends Component {
  @service router;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', (transition) => {
      if( transition.from?.name !== transition.to?.name ) {
        schedule('afterRender', this, function() {
          document.body.querySelector('#ember-a11y-refocus-nav-message').focus();
        });
      }
    });
  }
}
