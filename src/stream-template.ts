import {SegmentFlawMap, Stream, StreamFlawMap} from "./schema/stream";

export function generateJSONPage (streams: Stream[]) {
  streams.forEach(s => addPlayerDemoLinks(s));
  const streamsJSON = JSON.stringify(streams, null, '\t');
  const template = `
    <html>
        <body>
            <h1>Video-Dev Streams Repository</h1>
            <pre><code class="json>">${streamsJSON}</code></pre>
        </body>
        <link rel="stylesheet" href="style-json.css">
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.9/build/styles/a11y-dark.min.css">
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.15.9/build/highlight.min.js"></script>   
        <script>hljs.initHighlightingOnLoad();</script>
     </html>
  `;
  return template;
}

export function generatePage (streams: Stream[]) {
  const streamsHTML = streams.map(s => generateStreamHTML(s)).join('\n');
  const template = `
    <html>
        <head>
             <link rel="stylesheet" href="style.css">
         </head>
        <body>
          <div class="streams-page">
              ${streamsHTML}
          </div>
        </body>
    </html>
  `;
  return template;
}

function generateStreamHTML (stream: Stream) {
  const template = `
    <div class="stream">
        <div class="stream-metadata">
          <h2>${stream.title}</h2>
          <div class="item stream-description"><span>Description: </span>${stream.description}</div>
          <div class="item stream-url"><span>URL: </span>${stream.url}</div>
          <div class="item stream-streamtype"><span>Stream Type: </span>${stream.streamType}</div>
          <div class="item stream-filetype"><span>File Type: </span>${stream.fileType}</div>
        </div>
        <div class="stream-lists collapsed">
          <div class="item stream-feature-set"><span>Features: </span>${generateList(stream.features, 'feature')}</div>
          <div class="item stream-flaw-set"><span>Stream Flaws: </span>${generateStreamFlaws(stream.streamFlaws)}</div>
          <div class="item stream-segment-flaw-set"><span>Segment Flaws: </span>${generateSegmentFlaws(stream.segmentFlaws)}</div>
        </div>
        <!--<a href="https://hls-js-latest.netlify.com/demo/?src=${encodeURIComponent(stream.url)}" target="_blank">Open in the Hls.js Demo Page</a>-->
    </div>
  `;

  return template;
}

function generateStreamFlaws (flaws: StreamFlawMap[]) {
  const items = flaws.map(map => {
    return `${map.flaw} from time ${map.timeRange[0]} to ${map.timeRange[1]}`;
  });
  return generateList(items, 'segment-flaws');
}

function generateSegmentFlaws (flaws: SegmentFlawMap[]) {
  const items = flaws.map(map => {
    return `Segment ${map.segmentNumber}: ${map.flaw}`;
  });
  return generateList(items, 'stream-flaws');
}

function generateList (items: String[], className: string) {
  if (!items.length) {
    items.push('None Listed');
  }
  const list = items.map(item => {
    return `<li class=${className}>${item}</li>`
  }).join('\n');


  return `<ul class="list">${list}</ul>`;
}

function addPlayerDemoLinks(stream: Stream) {
  stream.playerDemos = [
    `<a href=${`https://hls-js-latest.netlify.com/demo/?src=${encodeURIComponent(stream.url)}`} target="_blank">Hls.js</a>`
  ];
}
