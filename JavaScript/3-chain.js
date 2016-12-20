'use strict';

function fn(a) {
  return function(b) {
    return function(c) {
      let s = a + b + c;
      console.log('a + b + c = ' + s);
    };
  };
}

let f1 = fn(1);

let f2 = f1(2);

let res = f2(3);

