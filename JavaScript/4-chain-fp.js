'use strict';

const fn = a => b => c => a + b + c;

const res = fn(1)(2)(3);
console.log('a + b + c = ' + res);
