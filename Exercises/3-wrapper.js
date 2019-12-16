'use strict';

const contract = (fn, ...types) => (...args) => {
  for (const index in args) {
    const arg = args[index];
    if (arg !== types[index](arg)) throw new TypeError(
      `type of argument '${arg}': '${typeof arg}'
      does not match '${types[index]}'!`);
  }
  const res = fn(...args);
  if (res !== types[types.length - 1](res))
    throw new TypeError(
      `type of result '${res}': '${typeof res}'
       does not match '${types[types.length - 1]}'!`
    );
  return res;
};

module.exports = { contract };
