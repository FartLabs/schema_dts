// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 * @see https://schema.org/SportsOrganization
 */
export const SCHEMA_ORG_SportsOrganization = "https://schema.org/SportsOrganization" as const;

/**
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 * @see https://schema.org/SportsOrganization
 */
export interface SchemaOrg_SportsOrganization extends SchemaOrg_Organization {
    /**
     * A type of sport (e.g. Baseball).
     * @see https://schema.org/sport
     */
    sport?: Array<SchemaOrg_Text | SchemaOrg_URL>;
}
