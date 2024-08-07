// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";

/**
 * A placeholder for multiple similar products of the same kind.
 * @see https://schema.org/SomeProducts
 */
export const SCHEMA_ORG_SomeProducts = "https://schema.org/SomeProducts" as const;

/**
 * A placeholder for multiple similar products of the same kind.
 * @see https://schema.org/SomeProducts
 */
export interface SchemaOrg_SomeProducts extends SchemaOrg_Product {
    /**
     * The current approximate inventory level for the item or items.
     * @see https://schema.org/inventoryLevel
     */
    inventoryLevel: Array<SchemaOrg_QuantitativeValue>;
}
