'use strict';

const contract = (fn, ...types) => (...values) => {
  for (let i = 0; i < values.length; i++) {
    const requiredType = types[i].name.toLowerCase()
    const currentType = typeof values[i]
    if (requiredType !== currentType) throw new TypeError('arg error');
  }
  const res = fn(...values);
  const requiredResultType = types[types.length - 1].name.toLowerCase();
  if (typeof res === requiredResultType) return res;
  throw new TypeError('result error');
};

module.exports = { contract };
