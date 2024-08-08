// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_Episode } from "./SchemaOrg_Episode.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_TVSeries } from "./SchemaOrg_TVSeries.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A TV episode which can be part of a series or season.
 * @see https://schema.org/TVEpisode
 */
export const SCHEMA_ORG_TVEpisode = "https://schema.org/TVEpisode" as const;

/**
 * A TV episode which can be part of a series or season.
 * @see https://schema.org/TVEpisode
 */
export interface SchemaOrg_TVEpisode extends SchemaOrg_Episode {
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
   * The TV series to which this episode or season belongs.
   * @see https://schema.org/partOfTVSeries
   */
  partOfTVSeries?: Array<SchemaOrg_TVSeries>;
  /**
   * Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
   * @see https://schema.org/subtitleLanguage
   */
  subtitleLanguage?: Array<SchemaOrg_Language | SchemaOrg_Text>;
  /**
   * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].
   *
   * Since schema.org types like [[Movie]], [[TVEpisode]], [[TVSeason]], and [[TVSeries]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
   * @see https://schema.org/titleEIDR
   */
  titleEIDR?: Array<SchemaOrg_URL | SchemaOrg_Text>;
}
