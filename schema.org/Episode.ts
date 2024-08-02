// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A media episode (e.g. TV, radio, video game) which can be part of a series or season. */
export interface ClassEpisode extends ClassCreativeWork {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** Position of the episode within an ordered group of episodes. */
  episodeNumber: Array<string | { "@id": string }>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** The season to which this episode belongs. */
  partOfSeason: Array<{ "@id": string }>;
  /** The series to which this episode or season belongs. */
  partOfSeries: Array<{ "@id": string }>;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: Array<{ "@id": string }>;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: Array<{ "@id": string }>;
}
