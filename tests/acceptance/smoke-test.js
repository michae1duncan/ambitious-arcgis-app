import { test } from 'qunit';
import moduleForAcceptance from 'ambitious-arcgis-app-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | smoke test');

test('smoke-test', function(assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/');
  });

  fillIn('form .input-group input', 'water');
  click('form .input-group button');

  andThen(function () {
    assert.equal(currentURL(), '/items?q=water');
  });
});
