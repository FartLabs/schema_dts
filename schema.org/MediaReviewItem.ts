// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** Represents an item or group of closely related items treated as a unit for the sake of evaluation in a [[MediaReview]]. Authorship etc. apply to the items rather than to the curation/grouping or reviewing party. */
export interface ClassMediaReviewItem extends ClassCreativeWork {
  /** In the context of a [[MediaReview]], indicates specific media item(s) that are grouped using a [[MediaReviewItem]]. */
  mediaItemAppearance: Array<{ "@id": string }>;
}
