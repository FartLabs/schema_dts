// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWorkSeries } from "./CreativeWorkSeries.ts";

/** A series of movies. Included movies can be indicated with the hasPart property. */
export interface ClassMovieSeries extends ClassCreativeWorkSeries {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: Array<{ "@id": string }>;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: Array<{ "@id": string }>;
}
