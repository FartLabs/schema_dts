// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_TrainStation } from "./SchemaOrg_TrainStation.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";

/**
 * A trip on a commercial train line.
 * @see https://schema.org/TrainTrip
 */
export const SCHEMA_ORG_TrainTrip = "https://schema.org/TrainTrip" as const;

/**
 * A trip on a commercial train line.
 * @see https://schema.org/TrainTrip
 */
export interface SchemaOrg_TrainTrip extends SchemaOrg_Trip {
    /**
     * The platform where the train arrives.
     * @see https://schema.org/arrivalPlatform
     */
    arrivalPlatform?: Array<SchemaOrg_Text>;
    /**
     * The station where the train trip ends.
     * @see https://schema.org/arrivalStation
     */
    arrivalStation?: Array<SchemaOrg_TrainStation>;
    /**
     * The platform from which the train departs.
     * @see https://schema.org/departurePlatform
     */
    departurePlatform?: Array<SchemaOrg_Text>;
    /**
     * The station from which the train departs.
     * @see https://schema.org/departureStation
     */
    departureStation?: Array<SchemaOrg_TrainStation>;
    /**
     * The name of the train (e.g. The Orient Express).
     * @see https://schema.org/trainName
     */
    trainName?: Array<SchemaOrg_Text>;
    /**
     * The unique identifier for the train.
     * @see https://schema.org/trainNumber
     */
    trainNumber?: Array<SchemaOrg_Text>;
}
