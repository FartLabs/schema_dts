// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Reservation } from "./SchemaOrg_Reservation.ts";

/**
 * A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * @see https://schema.org/RentalCarReservation
 */
export const SCHEMA_ORG_RentalCarReservation = "https://schema.org/RentalCarReservation" as const;

/**
 * A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 * @see https://schema.org/RentalCarReservation
 */
export interface SchemaOrg_RentalCarReservation extends SchemaOrg_Reservation {
    /**
     * Where a rental car can be dropped off.
     * @see https://schema.org/dropoffLocation
     */
    dropoffLocation?: Array<SchemaOrg_Place>;
    /**
     * When a rental car can be dropped off.
     * @see https://schema.org/dropoffTime
     */
    dropoffTime?: Array<SchemaOrg_DateTime>;
    /**
     * Where a taxi will pick up a passenger or a rental car can be picked up.
     * @see https://schema.org/pickupLocation
     */
    pickupLocation?: Array<SchemaOrg_Place>;
    /**
     * When a taxi will pick up a passenger or a rental car can be picked up.
     * @see https://schema.org/pickupTime
     */
    pickupTime?: Array<SchemaOrg_DateTime>;
}
