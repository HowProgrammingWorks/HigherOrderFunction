'use strict';

const iterate = (obj, cb) => {
  for (const [key, value] in obj) {
    cb(key, value, obj);
  }
};

module.exports = { iterate };
