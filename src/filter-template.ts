import {Stream, StreamType} from "./schema/stream";

type StreamKeys = [key in Stream];

export function filterStream (stream: Stream, [x in keyof Stream]) {

}
