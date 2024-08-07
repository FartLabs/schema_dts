// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_MediaObject } from "labs/SchemaOrg_MediaObject.ts";

/**
 * Represents an item or group of closely related items treated as a unit for the sake of evaluation in a [[MediaReview]]. Authorship etc. apply to the items rather than to the curation/grouping or reviewing party.
 * @see https://schema.org/MediaReviewItem
 */
export const SCHEMA_ORG_MediaReviewItem = "https://schema.org/MediaReviewItem" as const;

/**
 * Represents an item or group of closely related items treated as a unit for the sake of evaluation in a [[MediaReview]]. Authorship etc. apply to the items rather than to the curation/grouping or reviewing party.
 * @see https://schema.org/MediaReviewItem
 */
export interface SchemaOrg_MediaReviewItem extends SchemaOrg_CreativeWork {
    /**
     * In the context of a [[MediaReview]], indicates specific media item(s) that are grouped using a [[MediaReviewItem]].
     * @see https://schema.org/mediaItemAppearance
     */
    mediaItemAppearance: Array<SchemaOrg_MediaObject>;
}
