import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mock-login/accounts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mock-login/accounts');
    assert.ok(route);
  });
});
