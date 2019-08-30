const fs = require('fs');
const template = require('./lib/stream-template');
const streams = require('./lib/streams');

const html = template.generateJSONPage(streams.streams);
fs.writeFileSync('ui/index.html', html, { flag: 'w' });
