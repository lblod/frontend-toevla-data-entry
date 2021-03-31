import Controller from '@ember/controller';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';

export default class MockLoginController extends Controller {
  queryParams = ['search', 'page'];
  @tracked page = 0;
  @tracked search = "";

  @tracked accounts = [];

  /**
     * Performs a search to the backend when the search string has been
     * changed, has a timeout to prevent everlasting requests.
     */
  @task({ restartable: true })
  * postponedSearch(event) {
    const searchString = event.target.value;
    yield timeout(500);
    this.page = 0;
    this.search = searchString;
    this.fetchAccounts.perform();
  }

  /**
     * Effectively fetches content fromthe backend.
     */
  @task({ keepLatest: true })
  * fetchAccounts() {
    this.accounts =
      (yield this
       .store
       .query('account', {
         include: 'person.points-of-interest',
         filter: { provider: 'https://github.com/lblod/mock-login-service' },
         sort: 'person.first-name',
         "page[number]": this.page,
         "page[size]": 10,
         filter: isEmpty(this.search) ? undefined : this.search
       }))
      .toArray();
  }
}
