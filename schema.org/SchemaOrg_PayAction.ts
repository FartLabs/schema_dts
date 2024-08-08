// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_TradeAction } from "./SchemaOrg_TradeAction.ts";

/**
 * An agent pays a price to a participant.
 * @see https://schema.org/PayAction
 */
export const SCHEMA_ORG_PayAction = "https://schema.org/PayAction" as const;

/**
 * An agent pays a price to a participant.
 * @see https://schema.org/PayAction
 */
export interface SchemaOrg_PayAction extends SchemaOrg_TradeAction {
    /**
     * A sub property of participant. The participant who is at the receiving end of the action.
     * @see https://schema.org/recipient
     */
    recipient?: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
}
