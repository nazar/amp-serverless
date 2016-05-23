'use strict';

const getStory = require('./lib/getStory');

module.exports.handler = function(event, context, cb) {
  return getStory(event.storyId)
    .then(body => cb(null, body))
    .catch(cb);
};
