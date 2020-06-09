import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import Store from '@ember-data/store';

export default class PoiNew extends Controller {
  @tracked label: string | null = null;
  @tracked state: string = "ok";

  @service store!: Store;

  /**
   * Handles the submit event from the cursor.
   */
  @action
  submit(event: Event) {
    event.preventDefault();

    if (this.label) {
      this.createPoi(this.label as unknown as string);
      this.reset();
    } else {
      this.state = "error"
    }
  }

  /**
   * Resets the controller.
   */
  reset() {
    this.label = null;
  }

  /**
   * Creates a new point-of-interest and transitions to it.
   */
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
