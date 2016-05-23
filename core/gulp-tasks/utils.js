const path = require('path');

module.exports.ampPath = function() {
  const paths = [
    __dirname,
    '../functions/amp'].concat(Array.prototype.slice.call(arguments));

  return path.join.apply(null, paths);
};

