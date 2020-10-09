import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import Store from '@ember-data/store';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';

export default class PoiEdit extends Controller {
  @service store!: Store;

  model!: PointOfInterest;

  @action submit(event: Event) {
    event.preventDefault();
    this.model.save();
    this.transitionToRoute("poi.show.experiences.index", this.model);
  }

  @action async delete() {
    const widget = await this.model.widget;
    await this.model.destroyRecord();
    await widget.destroyRecord();
    this.transitionToRoute('poi.index');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/edit': PoiEdit;
  }
}
