'use strict';

const fn = () => {
  console.log('Generate cache');
  const cache = {};
  return (key) => {
    let res = cache[key];
    if (res) {
      console.log('From cache');
      return res;
    }
    console.log('Calculate and save to cache');
    res = 'value' + key;
    cache[key] = res;
    return res;
  };
};

const f1 = fn();
const f2 = fn();

f1(1);
f1(2);
f1(1);
f1(2);

f2(1);
f2(2);
f2(1);
f2(2);
