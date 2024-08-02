// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassInteractAction } from "./InteractAction.ts";

/** An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates. */
export interface ClassJoinAction extends ClassInteractAction {
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
}
