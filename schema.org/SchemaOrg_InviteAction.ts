// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CommunicateAction } from "./SchemaOrg_CommunicateAction.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";

/**
 * The act of asking someone to attend an event. Reciprocal of RsvpAction.
 * @see https://schema.org/InviteAction
 */
export const SCHEMA_ORG_InviteAction = "https://schema.org/InviteAction" as const;

/**
 * The act of asking someone to attend an event. Reciprocal of RsvpAction.
 * @see https://schema.org/InviteAction
 */
export interface SchemaOrg_InviteAction extends SchemaOrg_CommunicateAction {
    /**
     * Upcoming or past event associated with this place, organization, or action.
     * @see https://schema.org/event
     */
    event?: Array<SchemaOrg_Event>;
}
