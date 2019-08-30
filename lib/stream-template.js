"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJSONPage = generateJSONPage;
exports.generatePage = generatePage;

function generateJSONPage(streams) {
  streams.forEach(function (s) {
    return addPlayerDemoLinks(s);
  });
  var streamsJSON = JSON.stringify(streams, null, '\t');
  var template = "\n    <html>\n        <body>\n            <h1>Video-Dev Streams Repository</h1>\n            <pre><code class=\"json>\">".concat(streamsJSON, "</code></pre>\n        </body>\n        <link rel=\"stylesheet\" href=\"style-json.css\">\n        <link rel=\"stylesheet\" href=\"//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.9/build/styles/a11y-dark.min.css\">\n        <script src=\"//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.9/build/highlight.min.js\"></script>   \n        <script>hljs.initHighlightingOnLoad();</script>\n     </html>\n  ");
  return template;
}

function generatePage(streams) {
  var streamsHTML = streams.map(function (s) {
    return generateStreamHTML(s);
  }).join('\n');
  var template = "\n    <html>\n        <head>\n             <link rel=\"stylesheet\" href=\"style.css\">\n         </head>\n        <body>\n          <div class=\"streams-page\">\n              ".concat(streamsHTML, "\n          </div>\n        </body>\n    </html>\n  ");
  return template;
}

function generateStreamHTML(stream) {
  var template = "\n    <div class=\"stream\">\n        <div class=\"stream-metadata\">\n          <h2>".concat(stream.title, "</h2>\n          <div class=\"item stream-description\"><span>Description: </span>").concat(stream.description, "</div>\n          <div class=\"item stream-url\"><span>URL: </span>").concat(stream.url, "</div>\n          <div class=\"item stream-streamtype\"><span>Stream Type: </span>").concat(stream.streamType, "</div>\n          <div class=\"item stream-filetype\"><span>File Type: </span>").concat(stream.fileType, "</div>\n        </div>\n        <div class=\"stream-lists collapsed\">\n          <div class=\"item stream-feature-set\"><span>Features: </span>").concat(generateList(stream.features, 'feature'), "</div>\n          <div class=\"item stream-flaw-set\"><span>Stream Flaws: </span>").concat(generateStreamFlaws(stream.streamFlaws), "</div>\n          <div class=\"item stream-segment-flaw-set\"><span>Segment Flaws: </span>").concat(generateSegmentFlaws(stream.segmentFlaws), "</div>\n        </div>\n        <!--<a href=\"https://hls-js-latest.netlify.com/demo/?src=").concat(encodeURIComponent(stream.url), "\" target=\"_blank\">Open in the Hls.js Demo Page</a>-->\n    </div>\n  ");
  return template;
}

function generateStreamFlaws(flaws) {
  var items = flaws.map(function (map) {
    return "".concat(map.flaw, " from time ").concat(map.timeRange[0], " to ").concat(map.timeRange[1]);
  });
  return generateList(items, 'segment-flaws');
}

function generateSegmentFlaws(flaws) {
  var items = flaws.map(function (map) {
    return "Segment ".concat(map.segmentNumber, ": ").concat(map.flaw);
  });
  return generateList(items, 'stream-flaws');
}

function generateList(items, className) {
  if (!items.length) {
    items.push('None Listed');
  }

  var list = items.map(function (item) {
    return "<li class=".concat(className, ">").concat(item, "</li>");
  }).join('\n');
  return "<ul class=\"list\">".concat(list, "</ul>");
}

function addPlayerDemoLinks(stream) {
  stream.playerDemos = ["<a href=".concat("https://hls-js-latest.netlify.com/demo/?src=".concat(encodeURIComponent(stream.url)), " target=\"_blank\">Hls.js</a>")];
}