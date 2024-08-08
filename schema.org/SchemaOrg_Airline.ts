// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BoardingPolicyType } from "./SchemaOrg_BoardingPolicyType.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An organization that provides flights for passengers.
 * @see https://schema.org/Airline
 */
export const SCHEMA_ORG_Airline = "https://schema.org/Airline" as const;

/**
 * An organization that provides flights for passengers.
 * @see https://schema.org/Airline
 */
export interface SchemaOrg_Airline extends SchemaOrg_Organization {
  /**
   * The type of boarding policy used by the airline (e.g. zone-based or group-based).
   * @see https://schema.org/boardingPolicy
   */
  boardingPolicy?: Array<SchemaOrg_BoardingPolicyType>;
  /**
   * IATA identifier for an airline or airport.
   * @see https://schema.org/iataCode
   */
  iataCode?: Array<SchemaOrg_Text>;
}
