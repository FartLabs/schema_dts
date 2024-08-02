// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPerformingGroup } from "./PerformingGroup.ts";

/** A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician. */
export interface ClassMusicGroup extends ClassPerformingGroup {
  /** A music album. */
  album: Array<{ "@id": string }>;
  /** A collection of music albums. */
  albums: Array<{ "@id": string }>;
  /** Genre of the creative work, broadcast channel or group. */
  genre: Array<string | { "@id": string }>;
  /** A member of a music group&#x2014;for example, John, Paul, George, or Ringo. */
  musicGroupMember: Array<{ "@id": string }>;
  /** A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording. */
  track: Array<{ "@id": string }>;
  /** A music recording (track)&#x2014;usually a single song. */
  tracks: Array<{ "@id": string }>;
}
