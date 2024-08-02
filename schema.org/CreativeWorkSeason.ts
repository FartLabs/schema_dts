// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A media season, e.g. TV, radio, video game etc. */
export interface ClassCreativeWorkSeason extends ClassCreativeWork {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  endDate: Array<string>;
  /** An episode of a TV, radio or game media within a series or season. */
  episode: Array<{ "@id": string }>;
  /** An episode of a TV/radio series or season. */
  episodes: Array<{ "@id": string }>;
  /** The number of episodes in this season or series. */
  numberOfEpisodes: Array<{ "@id": string }>;
  /** The series to which this episode or season belongs. */
  partOfSeries: Array<{ "@id": string }>;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: Array<{ "@id": string }>;
  /** Position of the season within an ordered group of seasons. */
  seasonNumber: Array<string | { "@id": string }>;
  /** The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  startDate: Array<string>;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: Array<{ "@id": string }>;
}
