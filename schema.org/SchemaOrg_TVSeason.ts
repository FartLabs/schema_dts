// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Country } from "labs/SchemaOrg_Country.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CreativeWorkSeason } from "labs/SchemaOrg_CreativeWorkSeason.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_TVSeries } from "labs/SchemaOrg_TVSeries.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * Season dedicated to TV broadcast and associated online delivery.
 * @see https://schema.org/TVSeason
 */
export const SCHEMA_ORG_TVSeason = "https://schema.org/TVSeason" as const;

/**
 * Season dedicated to TV broadcast and associated online delivery.
 * @see https://schema.org/TVSeason
 */
export interface SchemaOrg_TVSeason extends SchemaOrg_CreativeWork, SchemaOrg_CreativeWorkSeason {
    /**
     * The country of origin of something, including products as well as creative  works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     * @see https://schema.org/countryOfOrigin
     */
    countryOfOrigin: Array<SchemaOrg_Country>;
    /**
     * The TV series to which this episode or season belongs.
     * @see https://schema.org/partOfTVSeries
     */
    partOfTVSeries: Array<SchemaOrg_TVSeries>;
    /**
     * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].
     *
     * Since schema.org types like [[Movie]], [[TVEpisode]], [[TVSeason]], and [[TVSeries]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
     * @see https://schema.org/titleEIDR
     */
    titleEIDR: Array<SchemaOrg_URL | SchemaOrg_Text>;
}
