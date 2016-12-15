import { size } from '../src/index';

describe('size constaint', () => {
  describe('unsuccessful validation with size set to invalid values', () => {
    it('should throw an Error', () => {
      [{}, 1, null, undefined, false, true].forEach( x =>
        expect(() => size(x)).toThrow(new Error('size constraint requires String parameter'))
      );
    });

    it('should throw an Groovy range Error', () => {
      ['asdf', '3313', '1<1'].forEach( x =>
        expect(() => size(x)).toThrow(new Error('size constraint requires parameter to conform to Groovy range'))
      );
    });

    it('should throw an value Error', () => {
      ['7..6', '7..7', '99<..<6'].forEach( x =>
        expect(() => size(x)).toThrow(new Error('size constraint requires min to be less than max'))
      );
    });
  });

});
