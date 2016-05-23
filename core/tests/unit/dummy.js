var dummy = require('../../functions/dummy/lib/dummyService');
var expect = require('chai').expect;
var jsdom = require("jsdom");

describe('Dummy Endpoint', function() {

  it('Should have correct title', done => {
    dummy()
      .then(html => {
        var doc = jsdom.jsdom(html);

        expect(doc.title).to.equal('Dummy Title');
        expect(doc.body.textContent).to.equal('\n    1,2,3\n  \n  \n'); //textContent acts like a PRE

        done();
      })
      .catch(done)
  });


});
