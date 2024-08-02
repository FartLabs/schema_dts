// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A review of an item - for example, of a restaurant, movie, or store. */
export interface ClassReview extends ClassCreativeWork {
  /** An associated [[ClaimReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[relatedClaimReview]] would be used on [[MediaReview]]. */
  associatedClaimReview: Array<{ "@id": string }>;
  /** An associated [[MediaReview]], related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case [[relatedMediaReview]] would commonly be used on a [[ClaimReview]], while [[relatedClaimReview]] would be used on [[MediaReview]]. */
  associatedMediaReview: Array<{ "@id": string }>;
  /** An associated [[Review]]. */
  associatedReview: Array<{ "@id": string }>;
  /** The item that is being reviewed/rated. */
  itemReviewed: Array<{ "@id": string }>;
  /**
   * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry
   *
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions
   * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
   *
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
   */
  negativeNotes: Array<string | { "@id": string }>;
  /**
   * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
   *
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
   *
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
   */
  positiveNotes: Array<string | { "@id": string }>;
  /** This Review or Rating is relevant to this part or facet of the itemReviewed. */
  reviewAspect: Array<string>;
  /** The actual body of the review. */
  reviewBody: Array<string>;
  /** The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work. */
  reviewRating: Array<{ "@id": string }>;
}
