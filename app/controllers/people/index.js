import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';
import fetch, { Response } from 'fetch';

const RESULTS_PER_PAGE = 20;

export default class PeopleIndexController extends Controller {
  queryParams = ['search', 'page'];
  @tracked page = 0;
  @tracked search = "";

  @tracked people = [];
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
    this.fetchPeople.perform();
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
  * fetchPeople() {
    const response = yield this.store.query( "person", {
      page: { size: RESULTS_PER_PAGE, number: this.page },
      filter: this.search === "" ? undefined : this.search
    });

    this.people = response;
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

    this.fetchPeople.perform();
  }

  @action
  previousPage() {
    if (this.visiblePage > 1)
      this.page = this.page - 1;

    this.fetchPeople.perform();
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
    this.fetchPeople.perform();
    this.firstName = "";
    this.lastName = "";
    this.emailAddress = "";
  }
}
