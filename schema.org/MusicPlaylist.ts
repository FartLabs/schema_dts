// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A collection of music tracks in playlist form. */
export interface ClassMusicPlaylist extends ClassCreativeWork {
  /** The number of tracks in this album or playlist. */
  numTracks: Array<{ "@id": string }>;
  /** A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
  track: Array<{ "@id": string }>;
  /** A music recording (track)&#x2014;usually a single song. */
  tracks: Array<{ "@id": string }>;
}
