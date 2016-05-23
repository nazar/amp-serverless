var _ = require('lodash');

module.exports = () => {
  return _.map([1, 2, 3], i => i.toString());
};
