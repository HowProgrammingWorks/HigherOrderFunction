'use strict';

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    callback(key, obj[key], obj);
  }
};

module.exports = { iterate };
