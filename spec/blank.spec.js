import { blank } from '../src/index';

describe('blank constaint', () => {
  describe('unsuccessful validation with blank set to false', () => {

    [, null, undefined, 1, {}, new Object(), "", new String("")].forEach(x =>
      it('should be invalid', () => {
        expect(blank(false)(x)).toBe(false);
      })
    );
  });

  describe('successful validation with blank set to false', () => {
    it('should be valid', () => {
      expect(blank(false)("test")).toBe(true);
    });
  });

  describe('unsuccessful validation with blank set to true', () => {
    [, null, undefined, 1].forEach(x =>
      it('should be invalid', () => {
        expect(blank(true)(x)).toBe(false);
      })
    );

  });

  describe('successful validation with blank set to true', () => {
    ["", new String("")].forEach(x =>
      it('should be valid', () => {
        expect(blank(true)(x)).toBe(true);
      })
    );
  });

});
