import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | legal/disclaimer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:legal/disclaimer');
    assert.ok(route);
  });
});
