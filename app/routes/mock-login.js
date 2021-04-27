import Route from '@ember/routing/route';

export default class MockLoginRoute extends Route {
  activate(){
    this.transitionTo("mock-login.pois");
  }
}
