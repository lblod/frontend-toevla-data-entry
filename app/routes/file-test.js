import Route from '@ember/routing/route';

export default class FileTestRoute extends Route {
  async model(){

    const poi=await this.store.findAll('point-of-interest');
    return poi.firstObject;
  }
}
