'use strict';

const iterate = (obj, callback) => {
  for (const key in obj) {
    callback(key, obj[key], obj);
  }
};

module.exports = { iterate };
