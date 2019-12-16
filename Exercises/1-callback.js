'use strict';

const iterate = (obj, callback) => {
  if (!obj) {
    callback(new Error('obj needed'));
    return;
  }
  for (const key of Object.keys(obj)) {
    callback(key, obj[key], obj);
  }
  return;
};

module.exports = { iterate };

