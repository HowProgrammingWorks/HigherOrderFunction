'use strict';

const iterate = (object, callback) => {
  for (let key in object){
    if(object.hasOwnProperty(key))
      callback(key, object[key]);
  }
//  for (let [key, value] of Object.entries(object) ) {
//    callback(key, value);
//  }
//  Object.entries(object).forEach(([key, value])=>{
//    callback(key, value);
//})
}

module.exports = { iterate };
