import Route from '@ember/routing/route';

export default class FileEditRoute extends Route {
  async model(params) {
    return await this.store.findRecord('file', params.id);
  }
}
