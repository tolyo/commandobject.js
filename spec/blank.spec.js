import { blank } from '../src/index';

describe('blank constaint', () => {
  describe('unsuccessful validation with blank set to false', () => {
    it('should be invalid', () => {
      expect(blank(false)()).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)(null)).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)(undefined)).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)(1)).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)({})).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)(new Object())).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)("")).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(false)(new String(""))).toBe(false);
    });
  });

  describe('successful validation with blank set to false', () => {
    it('should be valid', () => {
      expect(blank(false)("test")).toBe(true);
    });
  });

  describe('unsuccessful validation with blank set to true', () => {
    it('should be invalid', () => {
      expect(blank(true)()).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(true)(null)).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(true)(undefined)).toBe(false);
    });

    it('should be invalid', () => {
      expect(blank(true)(1)).toBe(false);
    });

  });

  describe('successful validation with blank set to true', () => {
    it('should be valid', () => {
      expect(blank(true)("")).toBe(true);
    });

    it('should be valid', () => {
      expect(blank(true)(new String(""))).toBe(true);
    });
  });

});
