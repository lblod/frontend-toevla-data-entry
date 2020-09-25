import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ontwikkelaars/intro', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ontwikkelaars/intro');
    assert.ok(route);
  });
});
