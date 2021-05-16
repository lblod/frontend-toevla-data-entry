import { set } from '@ember/object';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import Store from '@ember-data/store';
import PointOfInterest from 'frontend-toevla-data-entry/models/point-of-interest';
import Concept from 'frontend-toevla-data-entry/models/concept';
import ConceptScheme from 'frontend-toevla-data-entry/models/concept';
import { emberDataObjectInArray } from '../../helpers/ember-data-object-in-array';


export default class PoiEdit extends Controller {
  @service store!: Store;
  @service currentAccount;

  model!: PointOfInterest;
  iconScheme!: ConceptScheme;

  get sortedIcons(): Concept[] {
    return this
      .iconScheme
      .topLevelNodes
      .sortBy("order");
  }

  @action async submit(event: Event) {
    event.preventDefault();
    // working around buggy partial updat library
    const icons = (await this.model.summaryIcons).toArray();
    this.model.summaryIcons = [];
    await this.model.save();
    this.model.summaryIcons = A(icons);
    await this.model.save();
    this.transitionToRoute("poi.show.experiences.index", this.model);
  }

  @action async delete() {
    const widget = await this.model.widget;
    await this.model.destroyRecord();
    await widget.destroyRecord();
    this.transitionToRoute('poi.index');
  }

  @action
  async toggleIcon(concept) {
    const model = this.model;
    if (emberDataObjectInArray(concept, model.summaryIcons)) {
      model.summaryIcons = model.summaryIcons.rejectBy("id", concept.id);
    } else {
      const arr = (await model.summaryIcons).toArray();
      model.summaryIcons = A([...arr, concept]);
    }
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'poi/edit': PoiEdit;
  }
}
