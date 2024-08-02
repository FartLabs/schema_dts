// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReservation } from "./Reservation.ts";

/** A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. */
export interface ClassLodgingReservation extends ClassReservation {
  /** The earliest someone may check into a lodging establishment. */
  checkinTime: Array<string>;
  /** The latest someone may check out of a lodging establishment. */
  checkoutTime: Array<string>;
  /** A full description of the lodging unit. */
  lodgingUnitDescription: Array<string>;
  /** Textual description of the unit type (including suite vs. room, size of bed, etc.). */
  lodgingUnitType: Array<string | { "@id": string }>;
  /** The number of adults staying in the unit. */
  numAdults: Array<{ "@id": string }>;
  /** The number of children staying in the unit. */
  numChildren: Array<{ "@id": string }>;
}
