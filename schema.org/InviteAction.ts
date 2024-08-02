// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCommunicateAction } from "./CommunicateAction.ts";

/** The act of asking someone to attend an event. Reciprocal of RsvpAction. */
export interface ClassInviteAction extends ClassCommunicateAction {
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
}
