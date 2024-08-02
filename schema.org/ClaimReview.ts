// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReview } from "./Review.ts";

/** A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed). */
export interface ClassClaimReview extends ClassReview {
  /** A short summary of the specific claims reviewed in a ClaimReview. */
  claimReviewed: Array<string>;
}
