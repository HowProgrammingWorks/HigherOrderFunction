'use strict';

const contract = (fn, ...types) => (...args) => {
  for (const [arg, idx] of args) {
    const declaredType = typeof types[idx]();
    const actualType = typeof arg;

    if (declaredType !== actualType) {
      throw TypeError(`type '${actualType}' 
            do not match with type '${declaredType}'`);
    }
  }
  const result = fn(...args);
  const resultType = typeof result;
  const declaredResultType = typeof types[types.length - 1]();

  if (resultType !== declaredResultType) {
    throw TypeError(`type '${resultType}' 
          do not match with type '${declaredResultType}'`);
  }

  return result;
};

module.exports = { contract };
