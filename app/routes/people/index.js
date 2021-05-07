import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class PeopleIndexRoute extends Route {
  /**
   * The controller is responsible for maintaining template state so
   * we don't fully rerender the template..
   */
  setupController(controller){
    super.setupController(...arguments);
    controller.fetchPeople.perform();
  }
}
