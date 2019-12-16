'use strict';

const contract = (cb, ...types) => (...args) => {
        args.forEach((arg, idx) => {
            const declaredType = typeof types[idx]();
            const actualType = typeof arg;

            if (declaredType !== actualType) {
                throw TypeError(`type '${actualType}' do not match with type '${declaredType}'`);
            }
        });
        const result = cb(...args);
        const resultType = typeof result;
        const declaredResultType = typeof types[types.length - 1]();

        if (resultType !== declaredResultType) {
            throw TypeError(`type '${resultType}' do not match with type '${declaredResultType}'`);
        }

        return result;
};

module.exports = { contract };
