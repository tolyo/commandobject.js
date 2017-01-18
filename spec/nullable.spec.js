import { nullable } from '../src/index';
import test from 'tape';

test('nullable constaint', (assert) => {

	[, null, undefined].forEach(x =>
  		assert.equal(nullable(false)(x), false, 'should be invalid')
  	);

	[1, "", {}, 0].forEach(x =>
		assert.equal(nullable(false)(x), true, 'should be valid')
	);

	[, null, undefined].forEach(x =>
  		assert.equal(nullable(true)(x), true, 'should be valid')
	);

	assert.end();
});
