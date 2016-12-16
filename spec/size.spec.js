import { size } from '../src/index';
import test from 'tape';

test('size constrain validation with size set to invalid values', (assert) => {

    [{}, 1, null, undefined, false, true].forEach( x =>
      assert.throws(() => size(x), 'size constraint requires String parameter')
    );

    ['asdf', '3313', '1<1'].forEach( x =>
      assert.throws(() => size(x), 'size constraint requires parameter to conform to Groovy range')
    );

    assert.end();
});

