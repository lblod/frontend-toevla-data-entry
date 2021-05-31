import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | get-started/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:get-started/index');
    assert.ok(route);
  });
});
