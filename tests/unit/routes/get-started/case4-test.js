import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | get-started/case4', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:get-started/case4');
    assert.ok(route);
  });
});
