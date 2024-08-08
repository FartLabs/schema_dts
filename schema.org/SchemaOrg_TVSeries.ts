// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CreativeWorkSeason } from "./SchemaOrg_CreativeWorkSeason.ts";
import type { SchemaOrg_CreativeWorkSeries } from "./SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_Episode } from "./SchemaOrg_Episode.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_MusicGroup } from "./SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_VideoObject } from "./SchemaOrg_VideoObject.ts";

/**
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 * @see https://schema.org/TVSeries
 */
export const SCHEMA_ORG_TVSeries = "https://schema.org/TVSeries" as const;

/**
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 * @see https://schema.org/TVSeries
 */
export interface SchemaOrg_TVSeries
  extends SchemaOrg_CreativeWork, SchemaOrg_CreativeWorkSeries {
  /**
   * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor?: Array<SchemaOrg_Person>;
  /**
   * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actors
   */
  actors?: Array<SchemaOrg_Person>;
  /**
   * A season that is part of the media series.
   * @see https://schema.org/containsSeason
   */
  containsSeason?: Array<SchemaOrg_CreativeWorkSeason>;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   *
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   *
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   * @see https://schema.org/countryOfOrigin
   */
  countryOfOrigin?: Array<SchemaOrg_Country>;
  /**
   * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director?: Array<SchemaOrg_Person>;
  /**
   * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/directors
   */
  directors?: Array<SchemaOrg_Person>;
  /**
   * An episode of a TV, radio or game media within a series or season.
   * @see https://schema.org/episode
   */
  episode?: Array<SchemaOrg_Episode>;
  /**
   * An episode of a TV/radio series or season.
   * @see https://schema.org/episodes
   */
  episodes?: Array<SchemaOrg_Episode>;
  /**
   * The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy?: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
  /**
   * The number of episodes in this season or series.
   * @see https://schema.org/numberOfEpisodes
   */
  numberOfEpisodes?: Array<SchemaOrg_Integer>;
  /**
   * The number of seasons in this series.
   * @see https://schema.org/numberOfSeasons
   */
  numberOfSeasons?: Array<SchemaOrg_Integer>;
  /**
   * The production company or studio responsible for the item, e.g. series, video game, episode etc.
   * @see https://schema.org/productionCompany
   */
  productionCompany?: Array<SchemaOrg_Organization>;
  /**
   * A season in a media series.
   * @see https://schema.org/season
   */
  season?: Array<SchemaOrg_CreativeWorkSeason | SchemaOrg_URL>;
  /**
   * A season in a media series.
   * @see https://schema.org/seasons
   */
  seasons?: Array<SchemaOrg_CreativeWorkSeason>;
  /**
   * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].
   *
   * Since schema.org types like [[Movie]], [[TVEpisode]], [[TVSeason]], and [[TVSeries]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
   * @see https://schema.org/titleEIDR
   */
  titleEIDR?: Array<SchemaOrg_URL | SchemaOrg_Text>;
  /**
   * The trailer of a movie or TV/radio series, season, episode, etc.
   * @see https://schema.org/trailer
   */
  trailer?: Array<SchemaOrg_VideoObject>;
}
