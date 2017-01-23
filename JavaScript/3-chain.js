'use strict';

function fn(a) {
  return function(b) {
    return function(c) {
      const s = a + b + c;
      console.log('a + b + c = ' + s);
    };
  };
}

const f1 = fn(1);
const f2 = f1(2);
const res = f2(3);
