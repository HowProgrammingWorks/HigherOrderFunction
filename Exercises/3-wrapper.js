'use strict';

const contract = (fn, ...types) => (...arr) => {
  for (let i = 1; i < types.length - 1; i++) {
    if (typeof fn(...arr) !== types[i].name.toLowerCase()) {
      throw new TypeError('Types are different');
    }
  }
  return fn(...arr);
};

module.exports = { contract };

