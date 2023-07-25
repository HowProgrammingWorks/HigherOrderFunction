'use strict';
// prettier-ignore
const contract =
  (fn, ...types) =>
    (...args) => {
      for (let i = 0; i < args; i++) {
        const type = types[i];
        const arg = args[i];
        if (typeof arg !== type.name.toLowerCase()) {
          throw new TypeError('Types do not match');
        }
      }

      const result = fn(...args);
      const type = types.at(-1);
      if (typeof result !== type.name.toLowerCase()) {
        throw new TypeError('Types do not match');
      }

      return result;
    };

module.exports = { contract };
