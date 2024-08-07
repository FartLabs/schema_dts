// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * Event type: Education event.
 * @see https://schema.org/EducationEvent
 */
export const SCHEMA_ORG_EducationEvent = "https://schema.org/EducationEvent" as const;

/**
 * Event type: Education event.
 * @see https://schema.org/EducationEvent
 */
export interface SchemaOrg_EducationEvent extends SchemaOrg_Event {
    /**
     * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
     * @see https://schema.org/assesses
     */
    assesses: Array<SchemaOrg_DefinedTerm | SchemaOrg_Text>;
    /**
     * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
     * @see https://schema.org/educationalLevel
     */
    educationalLevel: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL>;
    /**
     * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
     * @see https://schema.org/teaches
     */
    teaches: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
}
