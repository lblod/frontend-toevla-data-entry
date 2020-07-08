import Route from '@ember/routing/route';

export default class JsonModelTesterRoute extends Route {
  model() {
    return this.store.findAll('tree-node');
  }
}
