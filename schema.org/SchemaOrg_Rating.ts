// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 * @see https://schema.org/Rating
 */
export const SCHEMA_ORG_Rating = "https://schema.org/Rating" as const;

/**
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 * @see https://schema.org/Rating
 */
export interface SchemaOrg_Rating extends SchemaOrg_Intangible {
  /**
   * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
   * @see https://schema.org/author
   */
  author?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The highest value allowed in this rating system.
   * @see https://schema.org/bestRating
   */
  bestRating?: Array<SchemaOrg_Number | SchemaOrg_Text>;
  /**
   * A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
   * @see https://schema.org/ratingExplanation
   */
  ratingExplanation?: Array<SchemaOrg_Text>;
  /**
   * The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   * @see https://schema.org/ratingValue
   */
  ratingValue?: Array<SchemaOrg_Number | SchemaOrg_Text>;
  /**
   * This Review or Rating is relevant to this part or facet of the itemReviewed.
   * @see https://schema.org/reviewAspect
   */
  reviewAspect?: Array<SchemaOrg_Text>;
  /**
   * The lowest value allowed in this rating system.
   * @see https://schema.org/worstRating
   */
  worstRating?: Array<SchemaOrg_Text | SchemaOrg_Number>;
}
