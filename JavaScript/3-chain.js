'use strict';

function fn(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const f1 = fn(1);
const f2 = f1(2);
const res = f2(3);
console.log('a + b + c = ' + res);
