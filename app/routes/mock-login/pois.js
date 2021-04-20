import Route from '@ember/routing/route';

export default class MockLoginPoisRoute extends Route {
  /**
   * The controller is responsible for maintaining template state so
   * we don't fully rerender the template..
   */
  setupController(controller){
    super.setupController(...arguments);
    controller.fetchPois.perform();
  }
}
