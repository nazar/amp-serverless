var dummy = require('../../functions/lib/dummyFunc');
var expect = require('chai').expect;

describe('DummyService', function() {
  expect(dummy()).to.deep.equal(['1', '2', '3']);
});
