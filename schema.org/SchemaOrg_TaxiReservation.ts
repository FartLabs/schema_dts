// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Reservation } from "./SchemaOrg_Reservation.ts";

/**
 * A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * @see https://schema.org/TaxiReservation
 */
export const SCHEMA_ORG_TaxiReservation =
  "https://schema.org/TaxiReservation" as const;

/**
 * A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * @see https://schema.org/TaxiReservation
 */
export interface SchemaOrg_TaxiReservation extends SchemaOrg_Reservation {
  /**
   * Number of people the reservation should accommodate.
   * @see https://schema.org/partySize
   */
  partySize?: Array<SchemaOrg_Integer | SchemaOrg_QuantitativeValue>;
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
