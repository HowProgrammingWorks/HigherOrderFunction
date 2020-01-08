'use strict';

const contract = (fn, ...types) => (...args) => {
  const resTyp = types[types.length - 1];
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] !== types[i](args[i])) {
      throw new Error('Wrong arguments type');
    }
  }
  const res = fn(...args);
  if (res !== resTyp(res)) throw new Error('Wrong result type');
  return res;
};

module.exports = { contract };
