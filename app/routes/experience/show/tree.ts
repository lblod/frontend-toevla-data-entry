import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import Store from '@ember-data/store';
import ExperienceShowTreeController from 'frontend-toevla-data-entry/controllers/experience/show/tree';
import Tree from 'frontend-toevla-data-entry/models/tree';
import Experience from 'frontend-toevla-data-entry/models/experience';
import { museaTree } from 'frontend-toevla-data-entry/utils/uris/concept-schemes';

export default class ExperienceShowTree extends Route {
  @service store!: Store;

  async model(): Promise<Tree | undefined> {
    const model = await this.store.query( 'concept-scheme', {
      "page[size]": 1,
      "filter[:uri:]": museaTree
    });
    return model.firstObject;
  }

  setupController( controller: ExperienceShowTreeController, model: Tree ) {
    controller.model = model;
    controller.experience = this.modelFor("experience.show") as Experience;
  }
}
