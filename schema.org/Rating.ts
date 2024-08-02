// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A rating is an evaluation on a numeric scale, such as 1 to 5 stars. */
export interface ClassRating extends ClassIntangible {
  /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. */
  author: Array<{ "@id": string }>;
  /** The highest value allowed in this rating system. */
  bestRating: Array<number | string>;
  /** A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]]. */
  ratingExplanation: Array<string>;
  /** The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  ratingValue: Array<number | string>;
  /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
  reviewAspect: Array<string>;
  /** The lowest value allowed in this rating system. */
  worstRating: Array<number | string>;
}
