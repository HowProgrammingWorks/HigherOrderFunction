'use strict';

function fn(a) {
  return function(b) {
    return function(c) {
      let s = a + b + c;
      console.log('a + b + c = ' + s);
    };
  };
}

fn(1)(2)(3);
