// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Reservation } from "labs/SchemaOrg_Reservation.ts";

/**
 * A group of multiple reservations with common values for all sub-reservations.
 * @see https://schema.org/ReservationPackage
 */
export const SCHEMA_ORG_ReservationPackage = "https://schema.org/ReservationPackage" as const;

/**
 * A group of multiple reservations with common values for all sub-reservations.
 * @see https://schema.org/ReservationPackage
 */
export interface SchemaOrg_ReservationPackage extends SchemaOrg_Reservation {
    /**
     * The individual reservations included in the package. Typically a repeated property.
     * @see https://schema.org/subReservation
     */
    subReservation: Array<SchemaOrg_Reservation>;
}
