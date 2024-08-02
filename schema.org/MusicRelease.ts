// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMusicPlaylist } from "./MusicPlaylist.ts";

/** A MusicRelease is a specific release of a music album. */
export interface ClassMusicRelease extends ClassMusicPlaylist {
  /** The catalog number for the release. */
  catalogNumber: Array<string>;
  /** The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga. */
  creditedTo: Array<{ "@id": string }>;
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.). */
  musicReleaseFormat: Array<{ "@id": string }>;
  /** The label that issued the release. */
  recordLabel: Array<{ "@id": string }>;
  /** The album this is a release of. */
  releaseOf: Array<{ "@id": string }>;
}
