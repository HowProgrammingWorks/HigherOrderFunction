'use strict';

const contract = (fn, ...types) => (...args) => {
  let i = 0;
  for (const val of args) {
    const Type = types[i++];
    const temp = new Type();
    const type = typeof temp.valueOf();
    if (typeof val !== type) {
      throw new TypeError(`Неверный тип аргумента ${val}`);
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
