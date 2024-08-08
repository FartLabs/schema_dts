// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A single, identifiable product instance (e.g. a laptop with a particular serial number).
 * @see https://schema.org/IndividualProduct
 */
export const SCHEMA_ORG_IndividualProduct = "https://schema.org/IndividualProduct" as const;

/**
 * A single, identifiable product instance (e.g. a laptop with a particular serial number).
 * @see https://schema.org/IndividualProduct
 */
export interface SchemaOrg_IndividualProduct extends SchemaOrg_Product {
    /**
     * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
     * @see https://schema.org/serialNumber
     */
    serialNumber?: Array<SchemaOrg_Text>;
}
