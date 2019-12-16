'use strict';

const contract = (fn, ...types) => (...arr) => {
  for (let i = 0; i < types.length - 1; i++) {
    const argType = typeof arr[i];
    const neededArgType = types[i].name.toLowerCase();
    if (argType !== neededArgType) {
      throw new TypeError('Types are different');
    }
  }
  const neededReType = types[types.length - 1].name.toLowerCase();
  const result = fn(...arr);
  if (typeof result !== neededReType) {
      throw new TypeError('Types are different');
    }
  return result;
};

module.exports = { contract };



