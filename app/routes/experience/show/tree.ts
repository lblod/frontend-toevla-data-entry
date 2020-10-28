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

  async afterModel() {
    const experience = this.modelFor("experience.show") as Experience;
    /*
     * NOTE: this is a hack to render the right experience in the
     * tree, as expected.  You can also see this in this.setupController,
     * in the Controller (as a tracked property), as well as in the
     * template as the basis for the tree.  We should rewrite this code
     * as we progress with inheritance.
     */
    this.mainExperience = (
      await this.store.query( 'experience', {
        "filter[point-of-interest][experiences][:id:]": experience.id,
        "filter[is-main-experience]": true
      })).firstObject;
  }

  setupController( controller: ExperienceShowTreeController, model: Tree ) {
    controller.model = model;
    controller.experience = this.modelFor("experience.show") as Experience;
    controller.mainExperience = this.mainExperience;
  }
}
