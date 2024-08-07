// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Clip } from "labs/SchemaOrg_Clip.ts";
import type { SchemaOrg_TVSeries } from "labs/SchemaOrg_TVSeries.ts";

/**
 * A short TV program or a segment/part of a TV program.
 * @see https://schema.org/TVClip
 */
export const SCHEMA_ORG_TVClip = "https://schema.org/TVClip" as const;

/**
 * A short TV program or a segment/part of a TV program.
 * @see https://schema.org/TVClip
 */
export interface SchemaOrg_TVClip extends SchemaOrg_Clip {
    /**
     * The TV series to which this episode or season belongs.
     * @see https://schema.org/partOfTVSeries
     */
    partOfTVSeries: Array<SchemaOrg_TVSeries>;
}
