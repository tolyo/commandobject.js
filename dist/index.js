'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nonEmpty = function nonEmpty(x) {
  return !(x === undefined || x === null);
};

var isString = function isString(x) {
  return nonEmpty(x) && x.constructor === String;
};

var isNumber = function isNumber(x) {
  return nonEmpty(x) && x.constructor === Number;
};

var RANGE_REGEX = /(?=(\d+)(<?)(\.{2})(<?)(\d+))/;

var Range = function () {
  function Range(value) {
    _classCallCheck(this, Range);

    var rangeParams = value.match(RANGE_REGEX);
    this.min = parseFloat(rangeParams[1]);
    this.minExclusive = rangeParams[2];
    this.max = parseFloat(rangeParams[5]);
    this.maxExclusive = rangeParams[4];
    if (this.max < this.min) throw new Error('size constraint requires min to be less than or equal to max');
  }

  _createClass(Range, [{
    key: 'inRange',
    value: function inRange(x) {
      if (isString(x)) return this.inRangeNumber(x.length);else if (isNumber(x)) return this.inRangeNumber(x);else if (x.constructor === Array) return this.inRangeNumber(x.length);else return false;
    }
  }, {
    key: 'inRangeNumber',
    value: function inRangeNumber(x) {
      var min = false,
          max = false;
      if (this.minExclusive) min = this.min < x;else min = this.min <= x;
      if (this.maxExclusive) min = this.max > x;else max = this.max >= x;
      return min && max;
    }
  }]);

  return Range;
}();

var nullable = exports.nullable = function nullable(boolean) {
  if (boolean === false) return function (x) {
    return nonEmpty(x);
  };else return function () {
    return true;
  };
};

var blank = exports.blank = function blank(boolean) {
  if (boolean === false) return function (x) {
    return isString(x) && x.length > 0;
  };else return function (x) {
    return isString(x);
  };
};

var inList = exports.inList = function inList(array) {
  var msg = 'inList constraint requires a non-empty Array parameter';
  if (!nonEmpty(array) || array.constructor !== Array) throw new Error(msg);else return function (x) {
    return array.indexOf(x) > -1;
  };
};

var size = exports.size = function size(range) {
  var msg1 = 'size constraint requires String parameter';
  if (!isString(range)) throw new Error(msg1);
  var msg2 = 'size constraint requires parameter to conform to Groovy range';
  if (range.match(RANGE_REGEX) === null) throw new Error(msg2);
  var rangeInstance = new Range(range);
  return function (x) {
    return rangeInstance.inRange(x);
  };
};
