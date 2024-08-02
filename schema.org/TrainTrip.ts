// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTrip } from "./Trip.ts";

/** A trip on a commercial train line. */
export interface ClassTrainTrip extends ClassTrip {
  /** The platform where the train arrives. */
  arrivalPlatform: Array<string>;
  /** The station where the train trip ends. */
  arrivalStation: Array<{ "@id": string }>;
  /** The platform from which the train departs. */
  departurePlatform: Array<string>;
  /** The station from which the train departs. */
  departureStation: Array<{ "@id": string }>;
  /** The name of the train (e.g. The Orient Express). */
  trainName: Array<string>;
  /** The unique identifier for the train. */
  trainNumber: Array<string>;
}
