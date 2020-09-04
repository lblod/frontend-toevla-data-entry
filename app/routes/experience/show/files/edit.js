import Route from '@ember/routing/route';

export default class ExperienceShowFilesEditRoute extends Route {
  async model(params){
    return this.store.findRecord('file', params.file_id);
  }
  setupController(controller, model){
    super.setupController(controller, model);
    controller.experience=this.modelFor('experience.show');

  }
}
