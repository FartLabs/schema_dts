// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CivicStructure } from "labs/SchemaOrg_CivicStructure.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * An airport.
 * @see https://schema.org/Airport
 */
export const SCHEMA_ORG_Airport = "https://schema.org/Airport" as const;

/**
 * An airport.
 * @see https://schema.org/Airport
 */
export interface SchemaOrg_Airport extends SchemaOrg_CivicStructure {
    /**
     * IATA identifier for an airline or airport.
     * @see https://schema.org/iataCode
     */
    iataCode: Array<SchemaOrg_Text>;
    /**
     * ICAO identifier for an airport.
     * @see https://schema.org/icaoCode
     */
    icaoCode: Array<SchemaOrg_Text>;
}
