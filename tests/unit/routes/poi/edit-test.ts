import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | poi/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:poi/edit');
    assert.ok(route);
  });
});
