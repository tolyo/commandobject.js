import { blank } from '../src/index';
import test from 'tape';

test('unsuccessful validation with blank set to false', (assert) => {

  [, null, undefined, 1, {}, new Object(), "", new String("")].forEach(x =>
    assert.notOk(blank(false)(x), 'should be invalid')
  );

  assert.end();
});

  // describe('successful validation with blank set to false', () => {
  //   it('should be valid', () => {
  //     expect(blank(false)("test")).toBe(true);
  //   });
  // });
	//
  // describe('unsuccessful validation with blank set to true', () => {
  //   [, null, undefined, 1].forEach(x =>
  //     it('should be invalid', () => {
  //       expect(blank(true)(x)).toBe(false);
  //     })
  //   );
	//
  // });
	//
  // describe('successful validation with blank set to true', () => {
  //   ["", new String("")].forEach(x =>
  //     it('should be valid', () => {
  //       expect(blank(true)(x)).toBe(true);
  //     })
  //   );
  // });

