const nonEmpty = e => !(e === undefined || e === null);

export const nullable = (boolean) => {
  if (boolean === false) {
    return e => nonEmpty(e);
  } else {
    return () => true;
  }
};

export const blank = (boolean) => {
  if (boolean === false) {
    return e => (
      nonEmpty(e)  &&
      typeof e.valueOf() == 'string' &&
      e.length > 0
    );
  } else {
    return e => (
      nonEmpty(e)  &&
      typeof e.valueOf() == 'string'
    );
  }
};

