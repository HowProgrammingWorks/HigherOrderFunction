'use strict';

const iterate = (obj, callback) => {
  //i'm here because of limit min, but may be it's his wrong solution...
  Object.keys(obj).forEach(key => callback(key, obj[key], obj));
};

module.exports = { iterate };
