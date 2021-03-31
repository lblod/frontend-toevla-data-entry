import Route from '@ember/routing/route';

export default class MockLoginRoute extends Route {
  /**
     * The controller is responsible for maintaining template state so
     * we don't fully rerender the template..
     */
  setupController(controller){
    super.setupController(...arguments);
    controller.fetchAccounts.perform();
  }
}
