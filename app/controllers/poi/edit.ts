import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import Store from '@ember-data/store';

export default class PoiEdit extends Controller {
  @service store!: Store;

  @action submit(event: Event) {
    event.preventDefault();
    this.model.save();
    this.transitionToRoute("poi.show", this.model);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/edit': PoiEdit;
  }
}
