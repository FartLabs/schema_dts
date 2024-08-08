// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Reservation } from "./SchemaOrg_Reservation.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";

/**
 * A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * @see https://schema.org/LodgingReservation
 */
export const SCHEMA_ORG_LodgingReservation = "https://schema.org/LodgingReservation" as const;

/**
 * A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * @see https://schema.org/LodgingReservation
 */
export interface SchemaOrg_LodgingReservation extends SchemaOrg_Reservation {
    /**
     * The earliest someone may check into a lodging establishment.
     * @see https://schema.org/checkinTime
     */
    checkinTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * The latest someone may check out of a lodging establishment.
     * @see https://schema.org/checkoutTime
     */
    checkoutTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * A full description of the lodging unit.
     * @see https://schema.org/lodgingUnitDescription
     */
    lodgingUnitDescription?: Array<SchemaOrg_Text>;
    /**
     * Textual description of the unit type (including suite vs. room, size of bed, etc.).
     * @see https://schema.org/lodgingUnitType
     */
    lodgingUnitType?: Array<SchemaOrg_Text | SchemaOrg_QualitativeValue>;
    /**
     * The number of adults staying in the unit.
     * @see https://schema.org/numAdults
     */
    numAdults?: Array<SchemaOrg_Integer | SchemaOrg_QuantitativeValue>;
    /**
     * The number of children staying in the unit.
     * @see https://schema.org/numChildren
     */
    numChildren?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Integer>;
}
