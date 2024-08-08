// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Airport } from "./SchemaOrg_Airport.ts";
import type { SchemaOrg_BoardingPolicyType } from "./SchemaOrg_BoardingPolicyType.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Distance } from "./SchemaOrg_Distance.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";
import type { SchemaOrg_Vehicle } from "./SchemaOrg_Vehicle.ts";

/**
 * An airline flight.
 * @see https://schema.org/Flight
 */
export const SCHEMA_ORG_Flight = "https://schema.org/Flight" as const;

/**
 * An airline flight.
 * @see https://schema.org/Flight
 */
export interface SchemaOrg_Flight extends SchemaOrg_Trip {
    /**
     * The kind of aircraft (e.g., "Boeing 747").
     * @see https://schema.org/aircraft
     */
    aircraft?: Array<SchemaOrg_Vehicle | SchemaOrg_Text>;
    /**
     * The airport where the flight terminates.
     * @see https://schema.org/arrivalAirport
     */
    arrivalAirport?: Array<SchemaOrg_Airport>;
    /**
     * Identifier of the flight's arrival gate.
     * @see https://schema.org/arrivalGate
     */
    arrivalGate?: Array<SchemaOrg_Text>;
    /**
     * Identifier of the flight's arrival terminal.
     * @see https://schema.org/arrivalTerminal
     */
    arrivalTerminal?: Array<SchemaOrg_Text>;
    /**
     * The type of boarding policy used by the airline (e.g. zone-based or group-based).
     * @see https://schema.org/boardingPolicy
     */
    boardingPolicy?: Array<SchemaOrg_BoardingPolicyType>;
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     * @see https://schema.org/carrier
     */
    carrier?: Array<SchemaOrg_Organization>;
    /**
     * The airport where the flight originates.
     * @see https://schema.org/departureAirport
     */
    departureAirport?: Array<SchemaOrg_Airport>;
    /**
     * Identifier of the flight's departure gate.
     * @see https://schema.org/departureGate
     */
    departureGate?: Array<SchemaOrg_Text>;
    /**
     * Identifier of the flight's departure terminal.
     * @see https://schema.org/departureTerminal
     */
    departureTerminal?: Array<SchemaOrg_Text>;
    /**
     * The estimated time the flight will take.
     * @see https://schema.org/estimatedFlightDuration
     */
    estimatedFlightDuration?: Array<SchemaOrg_Duration | SchemaOrg_Text>;
    /**
     * The distance of the flight.
     * @see https://schema.org/flightDistance
     */
    flightDistance?: Array<SchemaOrg_Distance | SchemaOrg_Text>;
    /**
     * The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.
     * @see https://schema.org/flightNumber
     */
    flightNumber?: Array<SchemaOrg_Text>;
    /**
     * Description of the meals that will be provided or available for purchase.
     * @see https://schema.org/mealService
     */
    mealService?: Array<SchemaOrg_Text>;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     * @see https://schema.org/seller
     */
    seller?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The time when a passenger can check into the flight online.
     * @see https://schema.org/webCheckinTime
     */
    webCheckinTime?: Array<SchemaOrg_DateTime>;
}
