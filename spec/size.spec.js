import { size } from '../src/index';
import test from 'tape';

test('size constraint validation with size set to invalid values', (assert) => {

  [{}, 1, null, undefined, false, true, NaN].forEach( x =>
    assert.throws(() => size(x), 'size constraint requires String parameter')
  );

  ['asdf', '3313', '1<1'].forEach( x =>
    assert.throws(() => size(x), 'size constraint requires parameter to conform to Groovy range')
  );

  ['7..6', '7..0', '99<..<6'].forEach( x =>
    assert.throws(() => size(x), 'size constraint requires min to be less than max')
  );

  ['asdf', '3313', '1<1'].forEach( x =>
    assert.throws(() => size(x), 'size constraint requires parameter to conform to Groovy range')
  );

  ["12345", '123456545654', '123451234512345'].forEach( x =>
    assert.equal(size('5..15')(x), true)
  );

  ["", '12', '1234512345123445'].forEach( x =>
    assert.equal(size('5..15')(x), false)
  );

  [5, 10, 15].forEach( x =>
    assert.equal(size('5..15')(x), true)
  );

  [1, 45, NaN].forEach( x =>
    assert.equal(size('5..15')(x), false)
  );

  [[1,2,3], [1], [1,3]].forEach( x =>
    assert.equal(size('1..3')(x), true)
  );

  [[], [1], [1,2,3, 1,2,3]].forEach( x =>
    assert.equal(size('2..4')(x), false)
  );

  assert.end();
});

