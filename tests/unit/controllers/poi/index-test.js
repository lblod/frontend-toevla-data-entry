import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | poi/index', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:poi/index');
    assert.ok(controller);
  });
});
