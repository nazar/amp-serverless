'use strict';

var getStory = require('../controllers/getStory');

module.exports.handler = function(event, context, cb) {
  return getStory(event.pathId)
    .then(body => cb(null, body))
    .catch(cb);
};
