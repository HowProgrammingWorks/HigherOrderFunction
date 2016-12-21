'use strict';

let fn = a => b => c => a + b + c;

let res = fn(1)(2)(3);
console.log('a + b + c = ' + res);
