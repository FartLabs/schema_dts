// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AggregateRating } from "./SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 * @see https://schema.org/Brand
 */
export const SCHEMA_ORG_Brand = "https://schema.org/Brand" as const;

/**
 * A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 * @see https://schema.org/Brand
 */
export interface SchemaOrg_Brand extends SchemaOrg_Intangible {
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating?: Array<SchemaOrg_AggregateRating>;
  /**
   * An associated logo.
   * @see https://schema.org/logo
   */
  logo?: Array<SchemaOrg_ImageObject | SchemaOrg_URL>;
  /**
   * A review of the item.
   * @see https://schema.org/review
   */
  review?: Array<SchemaOrg_Review>;
  /**
   * A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan?: Array<SchemaOrg_Text>;
}
