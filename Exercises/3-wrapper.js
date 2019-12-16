'use strict';

const contract = (fn, ...types) => (...arr) => {
  const resultType = typeof fn(...arr);
  const neededReType = types[types.length - 1].name.toLowerCase();
  for (let i = 0; i < types.length - 1; i++) {
    const argType = typeof arr[i];
    const neededArgType = types[i].name.toLowerCase();
    if (argType !== neededArgType) {
      throw new TypeError('Types are different');
    }
    if (resultType !== neededReType) {
      throw new TypeError('Types are different');
    }
  }
  return fn(...arr);
};

module.exports = { contract };


