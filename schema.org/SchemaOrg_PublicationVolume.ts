// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * @see https://schema.org/PublicationVolume
 */
export const SCHEMA_ORG_PublicationVolume = "https://schema.org/PublicationVolume" as const;

/**
 * A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * @see https://schema.org/PublicationVolume
 */
export interface SchemaOrg_PublicationVolume extends SchemaOrg_CreativeWork {
    /**
     * The page on which the work ends; for example "138" or "xvi".
     * @see https://schema.org/pageEnd
     */
    pageEnd?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * The page on which the work starts; for example "135" or "xiii".
     * @see https://schema.org/pageStart
     */
    pageStart?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
     * @see https://schema.org/pagination
     */
    pagination?: Array<SchemaOrg_Text>;
    /**
     * Identifies the volume of publication or multi-part work; for example, "iii" or "2".
     * @see https://schema.org/volumeNumber
     */
    volumeNumber?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
}
