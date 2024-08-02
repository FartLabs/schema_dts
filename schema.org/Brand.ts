// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A brand is a name used by an organization or business person for labeling a product, product group, or similar. */
export interface ClassBrand extends ClassIntangible {
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating: Array<{ "@id": string }>;
  /** An associated logo. */
  logo: Array<{ "@id": string }>;
  /** A review of the item. */
  review: Array<{ "@id": string }>;
  /** A slogan or motto associated with the item. */
  slogan: Array<string>;
}
