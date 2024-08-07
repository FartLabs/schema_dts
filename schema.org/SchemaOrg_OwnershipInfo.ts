// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";

/**
 * A structured value providing information about when a certain organization or person owned a certain product.
 * @see https://schema.org/OwnershipInfo
 */
export const SCHEMA_ORG_OwnershipInfo = "https://schema.org/OwnershipInfo" as const;

/**
 * A structured value providing information about when a certain organization or person owned a certain product.
 * @see https://schema.org/OwnershipInfo
 */
export interface SchemaOrg_OwnershipInfo extends SchemaOrg_StructuredValue {
    /**
     * The organization or person from which the product was acquired.
     * @see https://schema.org/acquiredFrom
     */
    acquiredFrom: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The date and time of obtaining the product.
     * @see https://schema.org/ownedFrom
     */
    ownedFrom: Array<SchemaOrg_DateTime>;
    /**
     * The date and time of giving up ownership on the product.
     * @see https://schema.org/ownedThrough
     */
    ownedThrough: Array<SchemaOrg_DateTime>;
    /**
     * The product that this structured value is referring to.
     * @see https://schema.org/typeOfGood
     */
    typeOfGood: Array<SchemaOrg_Product | SchemaOrg_Service>;
}
