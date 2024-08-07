// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_Rating } from "labs/SchemaOrg_Rating.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";

/**
 * The average rating based on multiple ratings or reviews.
 * @see https://schema.org/AggregateRating
 */
export const SCHEMA_ORG_AggregateRating = "https://schema.org/AggregateRating" as const;

/**
 * The average rating based on multiple ratings or reviews.
 * @see https://schema.org/AggregateRating
 */
export interface SchemaOrg_AggregateRating extends SchemaOrg_Rating {
    /**
     * The item that is being reviewed/rated.
     * @see https://schema.org/itemReviewed
     */
    itemReviewed: Array<SchemaOrg_Thing>;
    /**
     * The count of total number of ratings.
     * @see https://schema.org/ratingCount
     */
    ratingCount: Array<SchemaOrg_Integer>;
    /**
     * The count of total number of reviews.
     * @see https://schema.org/reviewCount
     */
    reviewCount: Array<SchemaOrg_Integer>;
}
