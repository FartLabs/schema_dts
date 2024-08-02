// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/**
 * A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
 *
 *   Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].
 *
 *   At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
 */
export interface ClassClaim extends ClassCreativeWork {
  /** Indicates an occurrence of a [[Claim]] in some [[CreativeWork]]. */
  appearance: Array<{ "@id": string }>;
  /** For a [[Claim]] interpreted from [[MediaObject]] content, the [[interpretedAsClaim]] property can be used to indicate a claim contained, implied or refined from the content of a [[MediaObject]]. */
  claimInterpreter: Array<{ "@id": string }>;
  /** Indicates the first known occurrence of a [[Claim]] in some [[CreativeWork]]. */
  firstAppearance: Array<{ "@id": string }>;
}
