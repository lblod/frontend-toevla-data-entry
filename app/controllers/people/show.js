import { set } from '@ember/object';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import fetch, { Response } from 'fetch';
import { alias } from '@ember/object/computed';

const RESULTS_PER_PAGE = 20;

export default class PeopleShowController extends Controller {
  @service store

  @alias("model.accounts.firstObject") account;

  queryParams = ['search', 'page'];
  @tracked page = 0;
  @tracked search = "";

  @tracked pois = [];
  @tracked meta = { count: 0 };

  @service store;

  /**
   * Performs a search to the backend when the search string has been
   * changed, has a timeout to prevent everlasting requests.
   */
  @task({ restartable: true })
  * postponedSearch(searchString) {
    yield timeout(500);
    this.page = 0;
    this.search = searchString;
    this.fetchPois.perform();
  }

  @action
  searchEvent(event) {
    event.preventDefault();
    const searchString = event.target.value;
    this.postponedSearch.perform(searchString);
  }

  /**
   * Effectively fetches content from the backend.
   */
  @task({ keepLatest: true })
  * fetchPois() {
    const response = yield this.store.query( "point-of-interest", {
      page: { size: RESULTS_PER_PAGE, number: this.page },
      filter: this.search === "" ? undefined : this.search
    });

    this.pois = response;
    this.meta = response.meta;
  }

  /**
   * Renders the page in a human way, starting from 1
   */
  get visiblePage() {
    return this.page + 1;
  }

  get lastPage() {
    return Math.ceil(this.meta.count / RESULTS_PER_PAGE);
  }

  @action
  nextPage() {
    if (this.visiblePage < this.lastPage)
      this.page = this.page + 1;

    this.fetchPois.perform();
  }

  @action
  previousPage() {
    if (this.visiblePage > 1)
      this.page = this.page - 1;

    this.fetchPois.perform();
  }


  @tracked firstName;
  @tracked lastName;
  @tracked emailAddress;

  @action
  async createPerson(event) {
    event.preventDefault();
    const person = this.store.createRecord('person', {
      firstName: this.firstName, lastName: this.lastName
    });
    await person.save();
    const account = this.store.createRecord('account', {
      person: person, email: this.emailAddress
    });
    await account.save();
    this.fetchPois.perform();
    this.firstName = "";
    this.lastName = "";
    this.emailAddress = "";
  }


  @action
  async addValidatorRole() {
    const role = this.store.createRecord('validator-role');
    role.save();

    // work around broken partial update library we save it so it knows
    // the state, then we clear it because otherwise it doesn't pick up
    // the changes, then we update with the state we wanted to have in
    // the first place.
    const currentRoles = (await this.account.roles).toArray();
    const newRoles = [...currentRoles,role];

    this.account.roles = A(newRoles);
    await this.account.save();
    this.account.roles = A([]);
    await this.account.save();
    this.account.roles = A(newRoles);
    await this.account.save();
  }

  @action
  async removeRole(role) {
    this.account.roles.removeObject(role);
    this.account.save();
  }

  @action
  async addRoleForMuseum( poi ) {
    const role = this.store.createRecord('data-entry-role', {
      pointOfInterest: poi
    });
    await role.save();

    // setup broken empty relationship handling
    if( this.account.roles.length === 0 ) {
      this.account.roles = [role];
      await this.account.save();
      this.account.roles = A([]);
      await this.account.save();
    }

    this.account.roles.pushObject( role );
    await this.account.save();
  }
}
