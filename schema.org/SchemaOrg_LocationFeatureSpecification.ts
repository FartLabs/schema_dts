// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_OpeningHoursSpecification } from "labs/SchemaOrg_OpeningHoursSpecification.ts";
import type { SchemaOrg_PropertyValue } from "labs/SchemaOrg_PropertyValue.ts";

/**
 * Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 * @see https://schema.org/LocationFeatureSpecification
 */
export const SCHEMA_ORG_LocationFeatureSpecification = "https://schema.org/LocationFeatureSpecification" as const;

/**
 * Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 * @see https://schema.org/LocationFeatureSpecification
 */
export interface SchemaOrg_LocationFeatureSpecification extends SchemaOrg_PropertyValue {
    /**
     * The hours during which this service or contact is available.
     * @see https://schema.org/hoursAvailable
     */
    hoursAvailable: Array<SchemaOrg_OpeningHoursSpecification>;
    /**
     * The date when the item becomes valid.
     * @see https://schema.org/validFrom
     */
    validFrom: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * @see https://schema.org/validThrough
     */
    validThrough: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
}
