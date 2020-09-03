import Route from '@ember/routing/route';

export default class FileTestRoute extends Route {
  async model(){
    return this.store.findRecord('point-of-interest', '5F3E5155271FB50008000001');
  }
}
