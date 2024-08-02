// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTrip } from "./Trip.ts";

/** A trip on a commercial ferry line. */
export interface ClassBoatTrip extends ClassTrip {
  /** The terminal or port from which the boat arrives. */
  arrivalBoatTerminal: Array<{ "@id": string }>;
  /** The terminal or port from which the boat departs. */
  departureBoatTerminal: Array<{ "@id": string }>;
}
