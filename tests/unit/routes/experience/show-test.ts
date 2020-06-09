import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | experience/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:experience/show');
    assert.ok(route);
  });
});
