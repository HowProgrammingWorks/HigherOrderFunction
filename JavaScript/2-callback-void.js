'use strict';

const fn = (par, callback) => {
  if (!par) {
    return void callback(new Error('Parameter needed'));
  }
  return void callback(null, `Data ${par}`);
};

const res = fn('example', (err, data) => {
  if (err) throw err;
  console.dir({ data });
  return 'Ignored result';
});

console.dir({ res });
