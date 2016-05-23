'use strict';

const dummyService = require('./lib/dummyService');

module.exports.handler = function(event, context, cb) {
  dummyService()
    .then(result => cb(null, result))
    .catch(cb);
};
