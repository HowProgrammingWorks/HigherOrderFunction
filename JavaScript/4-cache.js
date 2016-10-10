'use strict';

function fn() {
  console.log('Generate cache');
  let cache = {};
  return function(a) {
    let res = cache[a];
    if (res) {
      console.log('From cache');
      return res;
    } else {
      console.log('Calculate and save to cache');
      res = 'value' + a;
      cache[a] = res;
      return res;
    }
  };
}

let f1 = fn();
let f2 = fn();
f1(1);
f1(2);
f1(1);
f1(2);
f2(1);
f2(2);
f2(1);
f2(2);
