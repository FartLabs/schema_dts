// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMusicPlaylist } from "./MusicPlaylist.ts";

/** A collection of music tracks. */
export interface ClassMusicAlbum extends ClassMusicPlaylist {
  /** Classification of the album by its type of content: soundtrack, live album, studio album, etc. */
  albumProductionType: Array<{ "@id": string }>;
  /** A release of this album. */
  albumRelease: Array<{ "@id": string }>;
  /** The kind of release which this album is: single, EP or album. */
  albumReleaseType: Array<{ "@id": string }>;
  /** The artist that performed this album or recording. */
  byArtist: Array<{ "@id": string }>;
}
