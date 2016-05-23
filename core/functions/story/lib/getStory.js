'use strict';

const _ = require('lodash');
const request = require('request-promise');
const toJson = require('html-to-article-json')({});
const toAmp = require('article-json-to-amp');
const ejs = require('ejs');

module.exports = (storyId) => request({
  uri: `https://www.whosay.com/api/story/${storyId}`,
  json: true
})
  .then(story => {
    let html = _(story.items)
      .filter(item => item.htmlContent)
      .map(item => item.htmlContent);

    // Append cover image
    // really - we need to do a few more things here:
    // 1) add cover image
    // 2) add article title
    // 3) add article published data/time
    // 4) add any publisher information - from the api response.
    html = `
        <img height="435" width="435" src="${story.coverImageUrl}435.jpg" layout="responsive"/>
        ${html}
      `;

    html = toJson(html);

    return template()({
      body: toAmp(html),
      title: story.title,
      image: `${story.coverImageUrl}435.jpg`
    });
  });


///////////////
/// private

/* eslint-disable max-len */

function template() {
  return ejs.compile(`<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <title><% title %></title>
    <link rel="canonical" href="http://example.ampproject.org/article-metadata.html" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "<% title %>",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "<%- image %>"
        ]
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
    <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
  </head>
  <body>
    <%- body %>
  </body>
</html>  
  `);
}

