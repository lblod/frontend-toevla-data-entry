import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | developers/buildings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:developers/buildings');
    assert.ok(route);
  });
});
