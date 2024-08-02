// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganization } from "./Organization.ts";

/** An organization that provides flights for passengers. */
export interface ClassAirline extends ClassOrganization {
  /** The type of boarding policy used by the airline (e.g. zone-based or group-based). */
  boardingPolicy: Array<{ "@id": string }>;
  /** IATA identifier for an airline or airport. */
  iataCode: Array<string>;
}
