'use strict';

const contract = (fn, ...types) => (...args) => {
  args.forEach((arg, index) => {
    const typeName = types[index].name.toLowerCase();
    const argType = typeof arg;
    if (typeName !== argType) {
      throw new TypeError(`Argument type expected:
       ${typeName}, got: ${argType}`);
    }
  });
  const result = fn(...args);
  const expectedResultType = types[types.length - 1].name.toLowerCase();
  const resultType = typeof result;

  if (expectedResultType !== resultType) {
    throw new TypeError(`Result type expected:
     ${expectedResultType}, got: ${resultType}`);
  }

  return result;
};

module.exports = { contract };
