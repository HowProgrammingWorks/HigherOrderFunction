'use strict';

function fn(callback) {
  callback(null, 'Data');
  return 'Value';
}

fn((err, data) => {
  console.dir({ data });
});
