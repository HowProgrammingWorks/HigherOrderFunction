'use strict';

function fn(callback) {
  callback(null, 'Data');
  return 'Value';
}

fn(function(err, data) {
  console.dir({ data });
});
