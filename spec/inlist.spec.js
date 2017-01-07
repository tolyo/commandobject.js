import { inList } from '../src/index';
import test from 'tape';


test('inList constraint', (assert) => {

	[{}, "test", null, undefined].forEach(x =>
		assert.throws(() => inList(x), 'inList constraint requires a non-empty Array parameter')
	);

	[4, 5, null, undefined].forEach(x =>
		assert.equal(inList([1,2,3])(x), false, "should be invalid")
	);

	[1,2,3].forEach(x =>
		assert.equal(inList([1,2,3])(x), true, "should be valid")
	);

	assert.end();
});