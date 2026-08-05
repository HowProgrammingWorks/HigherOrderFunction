'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const expected = types[i];
    const typeName = expected.name.toLowerCase();
    if (typeof arg !== typeName) {
      throw new TypeError(`Argument type ${typeName} expected`);
    }
  }
  const result = fn(...args);
  const expected = types[types.length - 1];
  const typeName = expected.name.toLowerCase();
  if (typeof result !== typeName) {
    throw new TypeError(`Result type ${typeName} expected`);
  }
  return result;
};

module.exports = { contract };
