// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReservation } from "./Reservation.ts";

/** A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. */
export interface ClassRentalCarReservation extends ClassReservation {
  /** Where a rental car can be dropped off. */
  dropoffLocation: Array<{ "@id": string }>;
  /** When a rental car can be dropped off. */
  dropoffTime: Array<string>;
  /** Where a taxi will pick up a passenger or a rental car can be picked up. */
  pickupLocation: Array<{ "@id": string }>;
  /** When a taxi will pick up a passenger or a rental car can be picked up. */
  pickupTime: Array<string>;
}
