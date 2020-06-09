import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class PoiNew extends Controller {
  @tracked label = null;

  @service store;

  @action
  submit(event) {
    event.preventDefault();

    this.createPoi(this.label);
    this.reset();
  }

  reset() {
    console.log("Resetting controller");
    this.label = null;
  }

  async createPoi(label: string) {
    const record =
      await this
        .store
        .createRecord("point-of-interest", { label })
        .save();

    this.transitionToRoute('poi.show', record);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/new': PoiNew;
  }
}
