'use strict';

const contract =
    (fn, ...types) =>
    (...args) => {
        const argTypes = types.slice(0, -1).map((type) => type.name.toLowerCase());
        const returnType = types.at(-1).name.toLowerCase();
        const result = fn(...args);
        if (returnType !== typeof result) {
            throw new TypeError(`Expected ${returnType}`);
        }
        for (const [index, arg] of args.entries()) {
            if (typeof arg !== argTypes[index]) {
                throw new TypeError(`Expected ${argTypes[index]}`);
            }
        }
        return fn(...args);
    };

module.exports = { contract };
