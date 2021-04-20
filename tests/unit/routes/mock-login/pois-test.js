import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mock-login/pois', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mock-login/pois');
    assert.ok(route);
  });
});
