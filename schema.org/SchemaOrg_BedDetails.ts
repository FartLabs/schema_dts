// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BedType } from "labs/SchemaOrg_BedType.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
 * @see https://schema.org/BedDetails
 */
export const SCHEMA_ORG_BedDetails = "https://schema.org/BedDetails" as const;

/**
 * An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
 * @see https://schema.org/BedDetails
 */
export interface SchemaOrg_BedDetails extends SchemaOrg_Intangible {
    /**
     * The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.
     * @see https://schema.org/numberOfBeds
     */
    numberOfBeds: Array<SchemaOrg_Number>;
    /**
     * The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.
     * @see https://schema.org/typeOfBed
     */
    typeOfBed: Array<SchemaOrg_BedType | SchemaOrg_Text>;
}
