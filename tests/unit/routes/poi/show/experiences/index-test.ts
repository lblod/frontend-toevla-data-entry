import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | poi/show/experiences/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:poi/show/experiences/index');
    assert.ok(route);
  });
});
