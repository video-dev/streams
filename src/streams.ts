import {Stream, StreamType, FileType, Features, SegmentFlaw, StreamFlaw, ManifestType} from "./schema/stream";

export const streams: Stream[] = [
  {
    title: 'Big Buck Bunny',
    description: 'BBB, 5 renditions',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    manifestType: ManifestType.HLS,
    streamType: StreamType.VOD,
    fileType: FileType.MPEG2_TS,
    features: [
      Features.MULTIPLE_RENDITIONS
    ],
    streamFlaws: [],
    segmentFlaws: [],
    notes: []
  },
  {
    title: 'Archived Live VTT Countdown',
    description: 'Archived live stream with a new VTT cue every second',
    url: 'https://playertest.longtailvideo.com/streams/live-vtt-countdown/live.m3u8',
    manifestType: ManifestType.HLS,
    streamType: StreamType.ARCHIVED_LIVE,
    fileType: FileType.MPEG2_TS,
    features: [
      Features.MULTIPLE_RENDITIONS
    ],
    streamFlaws: [],
    segmentFlaws: [],
    notes: []
  },
  {
    title: 'Radio Host - 10 second start gap',
    description: 'Audio and video segments do not have intersecting time ranges',
    url: 'https://s3.amazonaws.com/bob.jwplayer.com/%7Ealex/123633/new_master.m3u8',
    manifestType: ManifestType.HLS,
    streamType: StreamType.VOD,
    fileType: FileType.MPEG2_TS,
    features: [],
    streamFlaws: [
      {
        flaw: StreamFlaw.GAP,
        timeRange: [0, 10]
      }
    ],
    segmentFlaws: [
      {
        flaw: SegmentFlaw.NON_INTERSECTING_TIMESTAMPS,
        segmentNumber: 0
      }
    ],
    notes: []
  },
  {
    title: 'Elephants Dream - Multiple Audio & VTT Tracks',
    description: '',
    url: 'https://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/elephantsdream2.smil/playlist.m3u',
    manifestType: ManifestType.HLS,
    streamType: StreamType.VOD,
    fileType: FileType.MPEG2_TS,
    features: [
      Features.ALTERNATE_AUDIO,
      Features.MULTIPLE_RENDITIONS,
      Features.VTT
    ],
    streamFlaws: [],
    segmentFlaws: [],
    notes: []
  }
];
