// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReview } from "./Review.ts";

/**
 * A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation.
 *     For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is
 *     a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working
 *     to combat misinformation, the specific structures for representing media objects, their versions and publication context, are still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup have not yet been finalized.
 */
export interface ClassMediaReview extends ClassReview {
  /** Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared). */
  mediaAuthenticityCategory: Array<{ "@id": string }>;
  /** Describes, in a [[MediaReview]] when dealing with [[DecontextualizedContent]], background information that can contribute to better interpretation of the [[MediaObject]]. */
  originalMediaContextDescription: Array<string>;
  /** Link to the page containing an original version of the content, or directly to an online copy of the original [[MediaObject]] content, e.g. video file. */
  originalMediaLink: Array<{ "@id": string }>;
}
