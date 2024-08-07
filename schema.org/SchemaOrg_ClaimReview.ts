// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Review } from "labs/SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
 * @see https://schema.org/ClaimReview
 */
export const SCHEMA_ORG_ClaimReview = "https://schema.org/ClaimReview" as const;

/**
 * A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
 * @see https://schema.org/ClaimReview
 */
export interface SchemaOrg_ClaimReview extends SchemaOrg_Review {
    /**
     * A short summary of the specific claims reviewed in a ClaimReview.
     * @see https://schema.org/claimReviewed
     */
    claimReviewed: Array<SchemaOrg_Text>;
}
