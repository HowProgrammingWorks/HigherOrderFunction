'use strict';

const iterate = (obj, callback) => {
  for (const field in obj) {
    const value = obj[field];
    callback(field, value, obj);
  }
};

module.exports = { iterate };
