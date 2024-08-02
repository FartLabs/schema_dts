// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReservation } from "./Reservation.ts";

/** A group of multiple reservations with common values for all sub-reservations. */
export interface ClassReservationPackage extends ClassReservation {
  /** The individual reservations included in the package. Typically a repeated property. */
  subReservation: Array<{ "@id": string }>;
}
