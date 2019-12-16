'use strict';

const contract = (fn, ...types) => (...args) => {
  for (const i in args) {
    const Type = types[i];
    const temp = new Type();
    const type = typeof temp.valueOf();
    const arg = args[i];
    if (typeof arg !== type) {
      throw new TypeError(`Неверный тип аргумента ${arg}`);
    }
  }
  const res = fn(...args);
  const TypeRes = types[types.length - 1];
  const tempRes = new TypeRes();
  const typeRes = typeof tempRes.valueOf();
  if (typeof res !== typeRes) {
    throw new TypeError(`Неверный тип результата ${res}`);
  }
  return res;
};

module.exports = { contract };
