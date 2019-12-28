'use strict';

const contract = (fn, ...types) => {
  const nFn = (...args) => {
    const resTyp = typeof(types.pop())();
    const argTyp = types.map(x => typeof x());
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== argTyp[i]) throw new Error('Wrong args type');
    }
    const res = fn(...args);
    if (typeof res !== resTyp) throw new Error('Wrong res type');
    return res;
  };
  return nFn;
};

module.exports = { contract };
