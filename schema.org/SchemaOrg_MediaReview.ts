// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MediaManipulationRatingEnumeration } from "./SchemaOrg_MediaManipulationRatingEnumeration.ts";
import type { SchemaOrg_MediaObject } from "./SchemaOrg_MediaObject.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_WebPage } from "./SchemaOrg_WebPage.ts";

/**
 * A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
 *     For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
 *     a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
 *     to combat misinformation, the specific structures for representing media objects, their versions and publication context, are still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup have not yet been finalized.
 * @see https://schema.org/MediaReview
 */
export const SCHEMA_ORG_MediaReview = "https://schema.org/MediaReview" as const;

/**
 * A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
 *     For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
 *     a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
 *     to combat misinformation, the specific structures for representing media objects, their versions and publication context, are still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup have not yet been finalized.
 * @see https://schema.org/MediaReview
 */
export interface SchemaOrg_MediaReview extends SchemaOrg_Review {
  /**
   * Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared).
   * @see https://schema.org/mediaAuthenticityCategory
   */
  mediaAuthenticityCategory?: Array<
    SchemaOrg_MediaManipulationRatingEnumeration
  >;
  /**
   * Describes, in a [[MediaReview]] when dealing with [[DecontextualizedContent]], background information that can contribute to better interpretation of the [[MediaObject]].
   * @see https://schema.org/originalMediaContextDescription
   */
  originalMediaContextDescription?: Array<SchemaOrg_Text>;
  /**
   * Link to the page containing an original version of the content, or directly to an online copy of the original [[MediaObject]] content, e.g. video file.
   * @see https://schema.org/originalMediaLink
   */
  originalMediaLink?: Array<
    SchemaOrg_URL | SchemaOrg_WebPage | SchemaOrg_MediaObject
  >;
}
