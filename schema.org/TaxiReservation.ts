// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReservation } from "./Reservation.ts";

/** A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]]. */
export interface ClassTaxiReservation extends ClassReservation {
  /** Number of people the reservation should accommodate. */
  partySize: Array<{ "@id": string }>;
  /** Where a taxi will pick up a passenger or a rental car can be picked up. */
  pickupLocation: Array<{ "@id": string }>;
  /** When a taxi will pick up a passenger or a rental car can be picked up. */
  pickupTime: Array<string>;
}
