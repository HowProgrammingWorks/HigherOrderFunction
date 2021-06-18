'use strict';

const iterate = (object, callback) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key))
      callback(key, object[key], object);
  }
};

module.exports = { iterate };
