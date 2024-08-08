// DO NOT EDIT: This file is generated.
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_Reservation } from "./SchemaOrg_Reservation.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * @see https://schema.org/FlightReservation
 */
export const SCHEMA_ORG_FlightReservation =
  "https://schema.org/FlightReservation" as const;

/**
 * A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * @see https://schema.org/FlightReservation
 */
export interface SchemaOrg_FlightReservation extends SchemaOrg_Reservation {
  /**
   * The airline-specific indicator of boarding order / preference.
   * @see https://schema.org/boardingGroup
   */
  boardingGroup?: Array<SchemaOrg_Text>;
  /**
   * The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).
   * @see https://schema.org/passengerPriorityStatus
   */
  passengerPriorityStatus?: Array<SchemaOrg_Text | SchemaOrg_QualitativeValue>;
  /**
   * The passenger's sequence number as assigned by the airline.
   * @see https://schema.org/passengerSequenceNumber
   */
  passengerSequenceNumber?: Array<SchemaOrg_Text>;
  /**
   * The type of security screening the passenger is subject to.
   * @see https://schema.org/securityScreening
   */
  securityScreening?: Array<SchemaOrg_Text>;
}
