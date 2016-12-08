export const nullable = (boolean) => {
  if (boolean === false) {
    return e => ((!(e === undefined || e === null)));
  } else {
    return () => { return true };
  }
};


