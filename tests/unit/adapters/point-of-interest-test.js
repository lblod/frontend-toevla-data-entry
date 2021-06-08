import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | point of interest', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:point-of-interest');
    assert.ok(adapter);
  });
});
