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

const RANGE_REGEX = /(?=(\d+)(<?)(\.{2})(<?)(\d+))/;

const isRangeLike = (value) => {
  return value.match(RANGE_REGEX) !== null;
};

class Range {
  constructor(min, minExclusive, max, maxExclusive) {
    this.min = min;
    this.minExclusive = minExclusive;
    this.max = max;
    this.maxExclusive = maxExclusive;
  }

  inRange(x) {
    if (isString(x)) return this.inRangeString(x)
  }

  inRangeString(x) {
    const length = x.length;
    let min = false, max = false;
    if (this.minExclusive) min = minExclusive(this.min)(length);
    else min = minInclusive(this.min)(length);
    if (this.maxExclusive) min = maxExclusive(this.max)(length);
    else max = maxInclusive(this.max)(length);
    return min && max;
  }
}

const parseRange = (value) => {
  const rangeParams = value.match(RANGE_REGEX);
  const min = parseFloat(rangeParams[1]);
  const minExclusive = rangeParams[2];
  const maxExclusive = rangeParams[4];
  const max = parseFloat(rangeParams[5]);
  const msg1 = 'size constraint requires min to be less than max';
  if (max <= min) throw new Error(msg1);
  const range = new Range(min, minExclusive, max, maxExclusive);
  return x => range.inRange(x);
};

export const size = (range) => {
  const msg1 = 'size constraint requires String parameter';
  if (!isString(range)) throw new Error(msg1);
  const msg2 = 'size constraint requires parameter to conform to Groovy range';
  if (!isRangeLike(range)) throw new Error(msg2);
  return parseRange(range);
};
