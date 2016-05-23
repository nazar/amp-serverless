'use strict';

const jsdomify = require('jsdomify').default;

const mod = require('../functions/amp/story/handler.js');
const mochaPlugin = require('serverless-mocha-plugin');
const wrapper = mochaPlugin.lambdaWrapper;
const expect = mochaPlugin.chai.expect;

wrapper.init(mod);

describe('story', () => {

  it('Should return content', (done) => {
    wrapper.run({storyId: 1295}, (err, response) => {
      if (err) {
        done(err);
      } else {
        expect(response).to.not.equal(null);
        done();
      }
    });
  });

  describe('The DOM', () => {

    after(() => {
      jsdomify.destroy();
    });

    it('Should contain a title', done => {
      wrapper.run({storyId: 1295}, (err, response) => {
        if (err) {
          done(err);
        } else {
          let doc;

          jsdomify.create(response);
          doc = jsdomify.getDocument();

          expect(doc.title).to.equal('Rory McIlroy: The Before and After of a Golf Pro');
          done();
        }
      });

    });

  });

});
