// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AllocateAction } from "./SchemaOrg_AllocateAction.ts";
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * The act of granting permission to an object.
 * @see https://schema.org/AuthorizeAction
 */
export const SCHEMA_ORG_AuthorizeAction = "https://schema.org/AuthorizeAction" as const;

/**
 * The act of granting permission to an object.
 * @see https://schema.org/AuthorizeAction
 */
export interface SchemaOrg_AuthorizeAction extends SchemaOrg_AllocateAction {
    /**
     * A sub property of participant. The participant who is at the receiving end of the action.
     * @see https://schema.org/recipient
     */
    recipient?: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
}
