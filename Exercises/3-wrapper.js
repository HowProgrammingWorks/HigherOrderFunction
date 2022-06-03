'use strict';

const contract = (fn, ...types) => (...args) => {

  for (let i = 0; i < types.length - 1; i++) {
    const arg = args[i];
    const curType = types[i].name.toLowerCase();

    if (typeof arg !== curType) {
      throw TypeError(`argument ${args[i]} is not a ${types[i].name}`);
    }
  }

  const result = fn(...args);
  const resultType = types[types.length - 1].name.toLowerCase();
  if (typeof result !== resultType) {
    throw TypeError(`result ${result} is not a ${resultType}`);
  }
  return result;
};

module.exports = { contract };
