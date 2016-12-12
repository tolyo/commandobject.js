const nonEmpty = x => !(x === undefined || x === null);

const isString = x => nonEmpty(x) && typeof x.valueOf() === 'string';

export const nullable = (boolean) => {
  if (boolean === false) return x => nonEmpty(x);
  else return () => true;
};

export const blank = (boolean) => {
  if (boolean === false) return x => isString(x) && x.length > 0;
  else return x => isString(x);
};

export const inList = (array) => {
  const msg = 'inList constraint requires a non-empty Array parameter';
  if (!nonEmpty(array) || array.constructor !== Array) throw new Error(msg);
  else return x => array.indexOf(x) > -1;
};

export const maxInclusive = (value) => {
  return x => x <= value;
};

export const minInclusive = (value) => {
  return x => x >= value;
};

export const maxExclusive = (value) => {
  return x => x < value;
};

export const minExclusive = (value) => {
  return x => x > value;
};

const RANGE_REGEX = /(?=\d+<?\.{2}<?\d+)/;

const isRangeLike = (value) => {
  return value.match(RANGE_REGEX) !== null;
};

export const size = (range) => {
  const msg1 = 'size constraint requires String parameter';
  if (!isString(range)) throw new Error(msg1);
  const msg2 = 'size constraint requires parameter to conform to Groovy range';
  if (!isRangeLike(range)) throw new Error(msg2);
};
