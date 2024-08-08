// DO NOT EDIT: This file is generated.
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_WarrantyScope } from "./SchemaOrg_WarrantyScope.ts";

/**
 * A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 * @see https://schema.org/WarrantyPromise
 */
export const SCHEMA_ORG_WarrantyPromise = "https://schema.org/WarrantyPromise" as const;

/**
 * A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 * @see https://schema.org/WarrantyPromise
 */
export interface SchemaOrg_WarrantyPromise extends SchemaOrg_StructuredValue {
    /**
     * The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.
     * @see https://schema.org/durationOfWarranty
     */
    durationOfWarranty?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The scope of the warranty promise.
     * @see https://schema.org/warrantyScope
     */
    warrantyScope?: Array<SchemaOrg_WarrantyScope>;
}
