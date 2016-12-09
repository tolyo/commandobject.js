const nonEmpty = x => !(x === undefined || x === null);

export const nullable = (boolean) => {
  if (boolean === false) return x => nonEmpty(x);
  else return () => true;
};

export const blank = (boolean) => {
  const isString = x => nonEmpty(x) && typeof x.valueOf() === 'string';
  if (boolean === false) return x => isString(x) && x.length > 0;
  else return x => isString(x);
};

export const inList = (array) => {
  const msg = 'inList constraint requires Array parameter';
  if (!nonEmpty(array) || array.constructor !== Array) throw new Error(msg);
  else return x => array.indexOf(x) > -1;
};
