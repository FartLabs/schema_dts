// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Reservation } from "./SchemaOrg_Reservation.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";

/**
 * A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * @see https://schema.org/FoodEstablishmentReservation
 */
export const SCHEMA_ORG_FoodEstablishmentReservation = "https://schema.org/FoodEstablishmentReservation" as const;

/**
 * A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * @see https://schema.org/FoodEstablishmentReservation
 */
export interface SchemaOrg_FoodEstablishmentReservation extends SchemaOrg_Reservation {
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     * @see https://schema.org/endTime
     */
    endTime?: Array<SchemaOrg_Time | SchemaOrg_DateTime>;
    /**
     * Number of people the reservation should accommodate.
     * @see https://schema.org/partySize
     */
    partySize?: Array<SchemaOrg_Integer | SchemaOrg_QuantitativeValue>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     * @see https://schema.org/startTime
     */
    startTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
}
