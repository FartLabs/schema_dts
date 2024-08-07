// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_SportsTeam } from "labs/SchemaOrg_SportsTeam.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * Event type: Sports event.
 * @see https://schema.org/SportsEvent
 */
export const SCHEMA_ORG_SportsEvent = "https://schema.org/SportsEvent" as const;

/**
 * Event type: Sports event.
 * @see https://schema.org/SportsEvent
 */
export interface SchemaOrg_SportsEvent extends SchemaOrg_Event {
    /**
     * The away team in a sports event.
     * @see https://schema.org/awayTeam
     */
    awayTeam: Array<SchemaOrg_SportsTeam | SchemaOrg_Person>;
    /**
     * A competitor in a sports event.
     * @see https://schema.org/competitor
     */
    competitor: Array<SchemaOrg_SportsTeam | SchemaOrg_Person>;
    /**
     * The home team in a sports event.
     * @see https://schema.org/homeTeam
     */
    homeTeam: Array<SchemaOrg_SportsTeam | SchemaOrg_Person>;
    /**
     * A type of sport (e.g. Baseball).
     * @see https://schema.org/sport
     */
    sport: Array<SchemaOrg_Text | SchemaOrg_URL>;
}
