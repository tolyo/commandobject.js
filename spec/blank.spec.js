import { blank } from '../src/index';
import test from 'tape';

test('blank constraint', (assert) => {

  [, null, undefined, 1, {}, new Object(), '', new String('')].forEach(x =>
    assert.notOk(blank(false)(x), 'should be invalid')
  );

  ['test'].forEach(x =>
    assert.equal(blank(false)(x), true, 'should be valid')
  );

  ['', new String('')].forEach(x =>
    assert.equal(blank(true)(x), true, 'should be valid')
  );

  assert.end();
});


