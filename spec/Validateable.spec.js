import Validateable from '../src/Validateable.js';
import test from 'tape';
import { blank, nullable } from '../src/index';

test('Validateable ', (assert) => {

	const book = new Book("ABC", "Frank" );

	assert.equal(book.validate(), true, "should be valid");

	assert.end();

});

class Book extends Validateable {

	constructor(title, author) {
		super();
		this.title = title;
		this.author = author;
	}

	// Define constraints
	constraints() {
		return {
			title  :  blank(false),
			author :  nullable(false)
		}
	}

}

