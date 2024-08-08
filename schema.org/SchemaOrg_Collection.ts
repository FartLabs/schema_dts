// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";

/**
 * A collection of items, e.g. creative works or products.
 * @see https://schema.org/Collection
 */
export const SCHEMA_ORG_Collection = "https://schema.org/Collection" as const;

/**
 * A collection of items, e.g. creative works or products.
 * @see https://schema.org/Collection
 */
export interface SchemaOrg_Collection extends SchemaOrg_CreativeWork {
  /**
   * The number of items in the [[Collection]].
   * @see https://schema.org/collectionSize
   */
  collectionSize?: Array<SchemaOrg_Integer>;
}
