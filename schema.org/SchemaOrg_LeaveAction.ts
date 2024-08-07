// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_InteractAction } from "labs/SchemaOrg_InteractAction.ts";

/**
 * An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 * @see https://schema.org/LeaveAction
 */
export const SCHEMA_ORG_LeaveAction = "https://schema.org/LeaveAction" as const;

/**
 * An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 * @see https://schema.org/LeaveAction
 */
export interface SchemaOrg_LeaveAction extends SchemaOrg_InteractAction {
    /**
     * Upcoming or past event associated with this place, organization, or action.
     * @see https://schema.org/event
     */
    event: Array<SchemaOrg_Event>;
}
