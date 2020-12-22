import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pre-launch', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pre-launch');
    assert.ok(route);
  });
});
