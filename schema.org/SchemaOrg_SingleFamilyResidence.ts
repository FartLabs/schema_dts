// DO NOT EDIT: This file is generated.
import type { SchemaOrg_House } from "labs/SchemaOrg_House.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";

/**
 * Residence type: Single-family home.
 * @see https://schema.org/SingleFamilyResidence
 */
export const SCHEMA_ORG_SingleFamilyResidence = "https://schema.org/SingleFamilyResidence" as const;

/**
 * Residence type: Single-family home.
 * @see https://schema.org/SingleFamilyResidence
 */
export interface SchemaOrg_SingleFamilyResidence extends SchemaOrg_House {
    /**
     * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
     * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * @see https://schema.org/numberOfRooms
     */
    numberOfRooms: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
    /**
     * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
     * Typical unit code(s): C62 for person.
     * @see https://schema.org/occupancy
     */
    occupancy: Array<SchemaOrg_QuantitativeValue>;
}
