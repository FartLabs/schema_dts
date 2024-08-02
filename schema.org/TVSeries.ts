// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";
import type { ClassCreativeWorkSeries } from "./CreativeWorkSeries.ts";

/** CreativeWorkSeries dedicated to TV broadcast and associated online delivery. */
export interface ClassTVSeries
  extends ClassCreativeWork, ClassCreativeWorkSeries {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** A season that is part of the media series. */
  containsSeason: Array<{ "@id": string }>;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   *
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   *
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   */
  countryOfOrigin: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** An episode of a TV, radio or game media within a series or season. */
  episode: Array<{ "@id": string }>;
  /** An episode of a TV/radio series or season. */
  episodes: Array<{ "@id": string }>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** The number of episodes in this season or series. */
  numberOfEpisodes: Array<{ "@id": string }>;
  /** The number of seasons in this series. */
  numberOfSeasons: Array<{ "@id": string }>;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: Array<{ "@id": string }>;
  /** A season in a media series. */
  season: Array<{ "@id": string }>;
  /** A season in a media series. */
  seasons: Array<{ "@id": string }>;
  /**
   * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].
   *
   * Since schema.org types like [[Movie]], [[TVEpisode]], [[TVSeason]], and [[TVSeries]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
   */
  titleEIDR: Array<string | { "@id": string }>;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: Array<{ "@id": string }>;
}
