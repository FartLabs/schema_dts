// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BusStation } from "./SchemaOrg_BusStation.ts";
import type { SchemaOrg_BusStop } from "./SchemaOrg_BusStop.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";

/**
 * A trip on a commercial bus line.
 * @see https://schema.org/BusTrip
 */
export const SCHEMA_ORG_BusTrip = "https://schema.org/BusTrip" as const;

/**
 * A trip on a commercial bus line.
 * @see https://schema.org/BusTrip
 */
export interface SchemaOrg_BusTrip extends SchemaOrg_Trip {
  /**
   * The stop or station from which the bus arrives.
   * @see https://schema.org/arrivalBusStop
   */
  arrivalBusStop?: Array<SchemaOrg_BusStation | SchemaOrg_BusStop>;
  /**
   * The name of the bus (e.g. Bolt Express).
   * @see https://schema.org/busName
   */
  busName?: Array<SchemaOrg_Text>;
  /**
   * The unique identifier for the bus.
   * @see https://schema.org/busNumber
   */
  busNumber?: Array<SchemaOrg_Text>;
  /**
   * The stop or station from which the bus departs.
   * @see https://schema.org/departureBusStop
   */
  departureBusStop?: Array<SchemaOrg_BusStation | SchemaOrg_BusStop>;
}
