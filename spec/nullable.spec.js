import { nullable } from '../src/index';

describe('nullable constaint', () => {
  describe('unsuccessful validation with nullable set to false', () => {
    it('should be invalid', () => {
      expect(nullable(false)()).toBe(false);
    });

    it('should be invalid', () => {
      expect(nullable(false)(null)).toBe(false);
    });

    it('should be invalid', () => {
      expect(nullable(false)(undefined)).toBe(false);
    });
  });

  describe('successful validation with nullable set to false', () => {
    it('should be valid', () => {
      expect(nullable(false)(1)).toBe(true);
    });

    it('should be valid', () => {
      expect(nullable(false)("")).toBe(true);
    });

    it('should be valid', () => {
      expect(nullable(false)({})).toBe(true);
    });

    it('should be valid', () => {
      expect(nullable(false)(0)).toBe(true);
    });
  });

  describe('successful validation with nullable set to true', () => {
    it('should be valid', () => {
      expect(nullable(true)()).toBe(true);
    });

    it('should be valid', () => {
      expect(nullable(true)(null)).toBe(true);
    });

    it('should be valid', () => {
      expect(nullable(true)(undefined)).toBe(true);
    });
  });

});
