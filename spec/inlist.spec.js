import { inList } from '../src/index';
import test from 'tape';

//
// describe('inList constraint', () => {
//   describe('unsuccessful validation', () => {
//     it('should throw an Error', () => {
//       [{}, "test", null, undefined].forEach( x =>
//         expect(() => inList(x)).toThrow(new Error('inList constraint requires a non-empty Array parameter'))
//       );
//     });
//
//     it('should be invalid', () => {
//       [4, 5, null, undefined].forEach(x =>
//         expect(inList([1,2,3])(x)).toBe(false)
//       );
//     });
//   });
//
//   describe('successful validation', () => {
//     it('should be invalid', () => {
//       [1,2,3].forEach(x =>
//         expect(inList([1,2,3])(x)).toBe(true)
//       );
//     });
//   });
//
// });