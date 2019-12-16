'use strict';

const iterate = (obj, cb) => {
    Object.keys(obj).forEach(key => {
        cb(key, obj[key], obj)
    })
};

module.exports = { iterate };
