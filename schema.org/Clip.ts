// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A short TV or radio program or a segment/part of a program. */
export interface ClassClip extends ClassCreativeWork {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** Position of the clip within an ordered group of clips. */
  clipNumber: Array<string | { "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** The end time of the clip expressed as the number of seconds from the beginning of the work. */
  endOffset: Array<number | { "@id": string }>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** The episode to which this clip belongs. */
  partOfEpisode: Array<{ "@id": string }>;
  /** The season to which this episode belongs. */
  partOfSeason: Array<{ "@id": string }>;
  /** The series to which this episode or season belongs. */
  partOfSeries: Array<{ "@id": string }>;
  /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
  startOffset: Array<number | { "@id": string }>;
}
