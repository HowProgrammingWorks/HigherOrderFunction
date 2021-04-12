'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const type = types[i].name;
    const argType = typeof args[i];
    if (type.toLowerCase() !== argType) {
      throw new TypeError(
        `Expected argument type "${type}"`
      );
    }
  }

  const res = fn(...args);
  const resType = typeof res;
  const lastType = types[types.length - 1].name;

  if (resType !== lastType.toLowerCase()) {
    throw new TypeError(
      `Expected result type "${lastType}"`
    );
  }

  return res;
};


module.exports = { contract };
