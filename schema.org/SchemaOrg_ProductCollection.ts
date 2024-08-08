// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Collection } from "./SchemaOrg_Collection.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_TypeAndQuantityNode } from "./SchemaOrg_TypeAndQuantityNode.ts";

/**
 * A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
 * @see https://schema.org/ProductCollection
 */
export const SCHEMA_ORG_ProductCollection =
  "https://schema.org/ProductCollection" as const;

/**
 * A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
 * @see https://schema.org/ProductCollection
 */
export interface SchemaOrg_ProductCollection
  extends SchemaOrg_Collection, SchemaOrg_Product {
  /**
   * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
   * @see https://schema.org/includesObject
   */
  includesObject?: Array<SchemaOrg_TypeAndQuantityNode>;
}
