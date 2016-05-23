'use strict';

const Bluebird = require('bluebird');
const ejs = require('ejs');

const dummyShared = require('../../lib/dummyFunc');

module.exports = () => Bluebird
  .try(() => template()({
    body: dummyShared(),
    title: 'Dummy Title'
  }));


///////////////
/// private

function template() {
  return ejs.compile(`<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <title><%= title %></title>
  </head>
  <body>
    <%- body %>
  </body>
</html>  
`);
}
