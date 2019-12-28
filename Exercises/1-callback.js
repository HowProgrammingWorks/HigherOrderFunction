'use strict';

const iterate = (obj, callback) => {
  //becuse of eslint say that it too short...maybe I do wrong
  for (const key in obj) {
    callback(key, obj[key], obj);
  }
};

module.exports = { iterate };
