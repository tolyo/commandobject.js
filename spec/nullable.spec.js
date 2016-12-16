import { nullable } from '../src/index';
import test from 'tape';

// describe('nullable constaint', () => {
//   describe('unsuccessful validation with nullable set to false', () => {
//     [, null, undefined].forEach(x =>
//       it('should be invalid', () => {
//         expect(nullable(false)(x)).toBe(false);
//       })
//     );
//   });
//
//   describe('successful validation with nullable set to false', () => {
//     [1, "", {}, 0].forEach(x =>
//       it('should be valid', () => {
//         expect(nullable(false)(x)).toBe(true);
//       })
//     );
//   });
//
//   describe('successful validation with nullable set to true', () => {
//     [, null, undefined].forEach(x =>
//       it('should be valid', () => {
//         expect(nullable(true)(x)).toBe(true);
//       })
//     );
//   });
//
// });
