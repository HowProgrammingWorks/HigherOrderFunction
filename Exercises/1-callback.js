'use strict';

const iterate = (object, callback) => {
  for (const key in object) {
    const value = object[key];
    callback(key, value, object);
  }
};

module.exports = { iterate };
