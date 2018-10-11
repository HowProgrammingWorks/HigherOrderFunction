'use strict';

function fn(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// const fn = a => b => c => a + b + c;

const f1 = fn(1);
const f2 = f1(2);
const res1 = f2(3);
const res2 = fn(1)(2)(3);

if (res1 === res2) {
  console.log('a + b + c =', res1);
}
