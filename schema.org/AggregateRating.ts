// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassRating } from "./Rating.ts";

/** The average rating based on multiple ratings or reviews. */
export interface ClassAggregateRating extends ClassRating {
  /** The item that is being reviewed/rated. */
  itemReviewed: Array<{ "@id": string }>;
  /** The count of total number of ratings. */
  ratingCount: Array<{ "@id": string }>;
  /** The count of total number of reviews. */
  reviewCount: Array<{ "@id": string }>;
}
