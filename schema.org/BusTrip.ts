// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTrip } from "./Trip.ts";

/** A trip on a commercial bus line. */
export interface ClassBusTrip extends ClassTrip {
  /** The stop or station from which the bus arrives. */
  arrivalBusStop: Array<{ "@id": string }>;
  /** The name of the bus (e.g. Bolt Express). */
  busName: Array<string>;
  /** The unique identifier for the bus. */
  busNumber: Array<string>;
  /** The stop or station from which the bus departs. */
  departureBusStop: Array<{ "@id": string }>;
}
