import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | experience/show/files/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:experience/show/files/edit');
    assert.ok(route);
  });
});
