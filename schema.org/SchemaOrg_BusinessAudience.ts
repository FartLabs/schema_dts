// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";

/**
 * A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 * @see https://schema.org/BusinessAudience
 */
export const SCHEMA_ORG_BusinessAudience = "https://schema.org/BusinessAudience" as const;

/**
 * A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 * @see https://schema.org/BusinessAudience
 */
export interface SchemaOrg_BusinessAudience extends SchemaOrg_Audience {
    /**
     * The number of employees in an organization, e.g. business.
     * @see https://schema.org/numberOfEmployees
     */
    numberOfEmployees: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The size of the business in annual revenue.
     * @see https://schema.org/yearlyRevenue
     */
    yearlyRevenue: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The age of the business.
     * @see https://schema.org/yearsInOperation
     */
    yearsInOperation: Array<SchemaOrg_QuantitativeValue>;
}
