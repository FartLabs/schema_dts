// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AssessAction } from "labs/SchemaOrg_AssessAction.ts";
import type { SchemaOrg_Review } from "labs/SchemaOrg_Review.ts";

/**
 * The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 * @see https://schema.org/ReviewAction
 */
export const SCHEMA_ORG_ReviewAction = "https://schema.org/ReviewAction" as const;

/**
 * The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 * @see https://schema.org/ReviewAction
 */
export interface SchemaOrg_ReviewAction extends SchemaOrg_AssessAction {
    /**
     * A sub property of result. The review that resulted in the performing of the action.
     * @see https://schema.org/resultReview
     */
    resultReview: Array<SchemaOrg_Review>;
}
