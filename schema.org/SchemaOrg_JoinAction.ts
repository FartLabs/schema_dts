// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_InteractAction } from "./SchemaOrg_InteractAction.ts";

/**
 * An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 * @see https://schema.org/JoinAction
 */
export const SCHEMA_ORG_JoinAction = "https://schema.org/JoinAction" as const;

/**
 * An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 * @see https://schema.org/JoinAction
 */
export interface SchemaOrg_JoinAction extends SchemaOrg_InteractAction {
    /**
     * Upcoming or past event associated with this place, organization, or action.
     * @see https://schema.org/event
     */
    event?: Array<SchemaOrg_Event>;
}
