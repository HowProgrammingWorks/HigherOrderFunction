'use strict';

function fn(a) {
  let b = 'Closure variable';
  return function(c) {
    console.dir({ a, b, c });
  };
}

let f1 = fn('Parameter 1');
f1('Parameter 2');
