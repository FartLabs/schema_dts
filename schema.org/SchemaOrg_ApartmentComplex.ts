// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Residence } from "labs/SchemaOrg_Residence.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * Residence type: Apartment complex.
 * @see https://schema.org/ApartmentComplex
 */
export const SCHEMA_ORG_ApartmentComplex = "https://schema.org/ApartmentComplex" as const;

/**
 * Residence type: Apartment complex.
 * @see https://schema.org/ApartmentComplex
 */
export interface SchemaOrg_ApartmentComplex extends SchemaOrg_Residence {
    /**
     * Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]].
     * @see https://schema.org/numberOfAccommodationUnits
     */
    numberOfAccommodationUnits: Array<SchemaOrg_QuantitativeValue>;
    /**
     * Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]].
     * @see https://schema.org/numberOfAvailableAccommodationUnits
     */
    numberOfAvailableAccommodationUnits: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]].
     * @see https://schema.org/numberOfBedrooms
     */
    numberOfBedrooms: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
    /**
     * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
     * @see https://schema.org/petsAllowed
     */
    petsAllowed: Array<SchemaOrg_Text | SchemaOrg_Boolean>;
    /**
     * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
     * @see https://schema.org/tourBookingPage
     */
    tourBookingPage: Array<SchemaOrg_URL>;
}
