// DO NOT EDIT: This file is generated.
import type { SchemaOrg_GenderType } from "labs/SchemaOrg_GenderType.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_SportsOrganization } from "labs/SchemaOrg_SportsOrganization.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Organization: Sports team.
 * @see https://schema.org/SportsTeam
 */
export const SCHEMA_ORG_SportsTeam = "https://schema.org/SportsTeam" as const;

/**
 * Organization: Sports team.
 * @see https://schema.org/SportsTeam
 */
export interface SchemaOrg_SportsTeam extends SchemaOrg_SportsOrganization {
    /**
     * A person that acts as performing member of a sports team; a player as opposed to a coach.
     * @see https://schema.org/athlete
     */
    athlete: Array<SchemaOrg_Person>;
    /**
     * A person that acts in a coaching role for a sports team.
     * @see https://schema.org/coach
     */
    coach: Array<SchemaOrg_Person>;
    /**
     * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
     * @see https://schema.org/gender
     */
    gender: Array<SchemaOrg_GenderType | SchemaOrg_Text>;
}
