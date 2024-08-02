// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Used to describe a seat, such as a reserved seat in an event reservation. */
export interface ClassSeat extends ClassIntangible {
  /** The location of the reserved seat (e.g., 27). */
  seatNumber: Array<string>;
  /** The row location of the reserved seat (e.g., B). */
  seatRow: Array<string>;
  /** The section location of the reserved seat (e.g. Orchestra). */
  seatSection: Array<string>;
  /** The type/class of the seat. */
  seatingType: Array<string | { "@id": string }>;
}
