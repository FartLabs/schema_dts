// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BoatTerminal } from "./SchemaOrg_BoatTerminal.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";

/**
 * A trip on a commercial ferry line.
 * @see https://schema.org/BoatTrip
 */
export const SCHEMA_ORG_BoatTrip = "https://schema.org/BoatTrip" as const;

/**
 * A trip on a commercial ferry line.
 * @see https://schema.org/BoatTrip
 */
export interface SchemaOrg_BoatTrip extends SchemaOrg_Trip {
    /**
     * The terminal or port from which the boat arrives.
     * @see https://schema.org/arrivalBoatTerminal
     */
    arrivalBoatTerminal?: Array<SchemaOrg_BoatTerminal>;
    /**
     * The terminal or port from which the boat departs.
     * @see https://schema.org/departureBoatTerminal
     */
    departureBoatTerminal?: Array<SchemaOrg_BoatTerminal>;
}
