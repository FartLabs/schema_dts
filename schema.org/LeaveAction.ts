// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassInteractAction } from "./InteractAction.ts";

/** An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service. */
export interface ClassLeaveAction extends ClassInteractAction {
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
}
