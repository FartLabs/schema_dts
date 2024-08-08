// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
 *
 *   Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].
 *
 *   At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
 * @see https://schema.org/Claim
 */
export const SCHEMA_ORG_Claim = "https://schema.org/Claim" as const;

/**
 * A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
 *
 *   Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].
 *
 *   At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
 * @see https://schema.org/Claim
 */
export interface SchemaOrg_Claim extends SchemaOrg_CreativeWork {
    /**
     * Indicates an occurrence of a [[Claim]] in some [[CreativeWork]].
     * @see https://schema.org/appearance
     */
    appearance?: Array<SchemaOrg_CreativeWork>;
    /**
     * For a [[Claim]] interpreted from [[MediaObject]] content, the [[interpretedAsClaim]] property can be used to indicate a claim contained, implied or refined from the content of a [[MediaObject]].
     * @see https://schema.org/claimInterpreter
     */
    claimInterpreter?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Indicates the first known occurrence of a [[Claim]] in some [[CreativeWork]].
     * @see https://schema.org/firstAppearance
     */
    firstAppearance?: Array<SchemaOrg_CreativeWork>;
}
