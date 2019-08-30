"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streams = void 0;

var _stream = require("./schema/stream");

var streams = [{
  title: 'Big Buck Bunny',
  description: 'BBB, 5 renditions',
  url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  manifestType: _stream.ManifestType.HLS,
  streamType: _stream.StreamType.VOD,
  fileType: _stream.FileType.MPEG2_TS,
  features: [_stream.Features.MULTIPLE_RENDITIONS],
  streamFlaws: [],
  segmentFlaws: [],
  notes: []
}, {
  title: 'Archived Live VTT Countdown',
  description: 'Archived live stream with a new VTT cue every second',
  url: 'https://playertest.longtailvideo.com/streams/live-vtt-countdown/live.m3u8',
  manifestType: _stream.ManifestType.HLS,
  streamType: _stream.StreamType.ARCHIVED_LIVE,
  fileType: _stream.FileType.MPEG2_TS,
  features: [_stream.Features.MULTIPLE_RENDITIONS],
  streamFlaws: [],
  segmentFlaws: [],
  notes: []
}, {
  title: 'Radio Host - 10 second start gap',
  description: 'Audio and video segments do not have intersecting time ranges',
  url: 'https://s3.amazonaws.com/bob.jwplayer.com/%7Ealex/123633/new_master.m3u8',
  manifestType: _stream.ManifestType.HLS,
  streamType: _stream.StreamType.VOD,
  fileType: _stream.FileType.MPEG2_TS,
  features: [],
  streamFlaws: [{
    flaw: _stream.StreamFlaw.GAP,
    timeRange: [0, 10]
  }],
  segmentFlaws: [{
    flaw: _stream.SegmentFlaw.NON_INTERSECTING_TIMESTAMPS,
    segmentNumber: 0
  }],
  notes: []
}, {
  title: 'Elephants Dream - Multiple Audio & VTT Tracks',
  description: '',
  url: 'https://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/elephantsdream2.smil/playlist.m3u',
  manifestType: _stream.ManifestType.HLS,
  streamType: _stream.StreamType.VOD,
  fileType: _stream.FileType.MPEG2_TS,
  features: [_stream.Features.ALTERNATE_AUDIO, _stream.Features.MULTIPLE_RENDITIONS, _stream.Features.VTT],
  streamFlaws: [],
  segmentFlaws: [],
  notes: []
}];
exports.streams = streams;