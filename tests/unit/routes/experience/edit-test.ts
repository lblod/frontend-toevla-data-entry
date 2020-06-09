import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | experience/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:experience/edit');
    assert.ok(route);
  });
});
