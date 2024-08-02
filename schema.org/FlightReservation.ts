// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReservation } from "./Reservation.ts";

/** A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
export interface ClassFlightReservation extends ClassReservation {
  /** The airline-specific indicator of boarding order / preference. */
  boardingGroup: Array<string>;
  /** The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority). */
  passengerPriorityStatus: Array<string | { "@id": string }>;
  /** The passenger's sequence number as assigned by the airline. */
  passengerSequenceNumber: Array<string>;
  /** The type of security screening the passenger is subject to. */
  securityScreening: Array<string>;
}
