export interface Stream {
  title: string
  description: string
  url: string
  manifestType: ManifestType
  streamType: StreamType
  fileType: FileType
  features: Features[]
  notes: String[]
  streamFlaws: StreamFlawMap[]
  segmentFlaws: SegmentFlawMap[],
  playerDemos?: String[]
}

export enum ManifestType {
  HLS = 'HLS',
  DASH = 'DASH'
}

export enum StreamType {
  VOD = 'VOD',
  LIVE = 'Live',
  ARCHIVED_LIVE = 'Archived Live',
}

export enum FileType {
  MPEG2_TS = 'MPEG2-TS',
  CMAF = 'CMAF',
  FMP4 = 'Fragmented MP4'
}

export enum Features {
  AES_128 = 'AES-128',
  SAMPLE_AES = 'Sample-AES',
  MULTIPLE_RENDITIONS = 'Multiple Renditions',
  ALTERNATE_AUDIO = 'Alternate Audio',
  VTT = 'VTT Subtitles',
  EIA_608_708 = '608/708 Captions'
}

export enum Codec {
  AAC = 'AAC',
  H264 = 'H264'
}

export enum StreamFlaw {
  GAP = 'Gap'
}

export interface StreamFlawMap {
  flaw: StreamFlaw,
  timeRange: [number, number]
}

export enum SegmentFlaw {
  PTS_BEFORE_DTS = 'PTS before DTS',
  NON_INTERSECTING_TIMESTAMPS = 'Non-intersecting Timestamps'
}

export interface SegmentFlawMap {
  flaw: SegmentFlaw
  segmentNumber?: number
}
