export { default as Validateable } from "./Validateable.js";

const nonEmpty = x => !(x === undefined || x === null);

const isString = x => nonEmpty(x) && x.constructor === String;

const isNumber = x => nonEmpty(x) && x.constructor === Number;

const RANGE_REGEX = /(?=(\d+)(<?)(\.{2})(<?)(\d+))/;

class Range {
  constructor(value) {
    const rangeParams = value.match(RANGE_REGEX);
    this.min = parseFloat(rangeParams[1]);
    this.minExclusive = rangeParams[2];
    this.max = parseFloat(rangeParams[5]);
    this.maxExclusive = rangeParams[4];
    if (this.max < this.min) throw new Error('size constraint requires min to be less than or equal to max');
  }

  inRange(x) {
    if (isString(x)) return this.inRangeNumber(x.length);
    else if (isNumber(x)) return this.inRangeNumber(x);
    else if (x.constructor === Array) return this.inRangeNumber(x.length);
    else return false;
  }

  inRangeNumber(x) {
    let min = false, max = false;
    if (this.minExclusive) min = this.min < x;
    else min = this.min <= x;
    if (this.maxExclusive) min = this.max > x;
    else max = this.max >= x;
    return min && max;
  }

}

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

export const size = (range) => {
  const msg1 = 'size constraint requires String parameter';
  if (!isString(range)) throw new Error(msg1);
  const msg2 = 'size constraint requires parameter to conform to Groovy range';
  if (range.match(RANGE_REGEX) === null) throw new Error(msg2);
  const rangeInstance = new Range(range);
  return x => rangeInstance.inRange(x);
};




