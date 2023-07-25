'use strict';

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const element = obj[key];
    callback(key, element, obj);
  }
};

module.exports = { iterate };
