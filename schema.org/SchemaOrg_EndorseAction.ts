// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_ReactAction } from "./SchemaOrg_ReactAction.ts";

/**
 * An agent approves/certifies/likes/supports/sanctions an object.
 * @see https://schema.org/EndorseAction
 */
export const SCHEMA_ORG_EndorseAction = "https://schema.org/EndorseAction" as const;

/**
 * An agent approves/certifies/likes/supports/sanctions an object.
 * @see https://schema.org/EndorseAction
 */
export interface SchemaOrg_EndorseAction extends SchemaOrg_ReactAction {
    /**
     * A sub property of participant. The person/organization being supported.
     * @see https://schema.org/endorsee
     */
    endorsee?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
