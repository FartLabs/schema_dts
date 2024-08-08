// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CommunicateAction } from "./SchemaOrg_CommunicateAction.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";

/**
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 * @see https://schema.org/InformAction
 */
export const SCHEMA_ORG_InformAction = "https://schema.org/InformAction" as const;

/**
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 * @see https://schema.org/InformAction
 */
export interface SchemaOrg_InformAction extends SchemaOrg_CommunicateAction {
    /**
     * Upcoming or past event associated with this place, organization, or action.
     * @see https://schema.org/event
     */
    event?: Array<SchemaOrg_Event>;
}
