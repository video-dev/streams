"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SegmentFlaw = exports.StreamFlaw = exports.Codec = exports.Features = exports.FileType = exports.StreamType = exports.ManifestType = void 0;
var ManifestType;
exports.ManifestType = ManifestType;

(function (ManifestType) {
  ManifestType["HLS"] = "HLS";
  ManifestType["DASH"] = "DASH";
})(ManifestType || (exports.ManifestType = ManifestType = {}));

;
var StreamType;
exports.StreamType = StreamType;

(function (StreamType) {
  StreamType["VOD"] = "VOD";
  StreamType["LIVE"] = "Live";
  StreamType["ARCHIVED_LIVE"] = "Archived Live";
})(StreamType || (exports.StreamType = StreamType = {}));

var FileType;
exports.FileType = FileType;

(function (FileType) {
  FileType["MPEG2_TS"] = "MPEG2-TS";
  FileType["CMAF"] = "CMAF";
  FileType["FMP4"] = "Fragmented MP4";
})(FileType || (exports.FileType = FileType = {}));

var Features;
exports.Features = Features;

(function (Features) {
  Features["AES_128"] = "AES-128";
  Features["SAMPLE_AES"] = "Sample-AES";
  Features["MULTIPLE_RENDITIONS"] = "Multiple Renditions";
  Features["ALTERNATE_AUDIO"] = "Alternate Audio";
  Features["VTT"] = "VTT Subtitles";
  Features["EIA_608_708"] = "608/708 Captions";
})(Features || (exports.Features = Features = {}));

var Codec;
exports.Codec = Codec;

(function (Codec) {
  Codec["AAC"] = "AAC";
  Codec["H264"] = "H264";
})(Codec || (exports.Codec = Codec = {}));

var StreamFlaw;
exports.StreamFlaw = StreamFlaw;

(function (StreamFlaw) {
  StreamFlaw["GAP"] = "Gap";
})(StreamFlaw || (exports.StreamFlaw = StreamFlaw = {}));

var SegmentFlaw;
exports.SegmentFlaw = SegmentFlaw;

(function (SegmentFlaw) {
  SegmentFlaw["PTS_BEFORE_DTS"] = "PTS before DTS";
  SegmentFlaw["NON_INTERSECTING_TIMESTAMPS"] = "Non-intersecting Timestamps";
})(SegmentFlaw || (exports.SegmentFlaw = SegmentFlaw = {}));