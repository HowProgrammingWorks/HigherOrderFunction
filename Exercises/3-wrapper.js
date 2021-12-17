'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < types.length - 1; i++) {
    const arg = args[i];
    const type = types[i];
    const name = type.name.toLowerCase();
    if (typeof(arg) !== name) {
      throw new TypeError(`Argument expected to be ${name}`);
    }
  }
  const res = fn(...args);
  const typeOfRes = types[types.length - 1];
  const name = typeOfRes.name.toLowerCase();
  if (typeof(res) !== name) {
    throw new TypeError(`Result expected to be ${name}`);
  }
  return res;
};

module.exports = { contract };
