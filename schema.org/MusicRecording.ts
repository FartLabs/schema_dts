// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A music recording (track), usually a single song. */
export interface ClassMusicRecording extends ClassCreativeWork {
  /** The artist that performed this album or recording. */
  byArtist: Array<{ "@id": string }>;
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** The album to which this recording belongs. */
  inAlbum: Array<{ "@id": string }>;
  /** The playlist to which this recording belongs. */
  inPlaylist: Array<{ "@id": string }>;
  /** The International Standard Recording Code for the recording. */
  isrcCode: Array<string>;
  /** The composition this track is a recording of. */
  recordingOf: Array<{ "@id": string }>;
}
