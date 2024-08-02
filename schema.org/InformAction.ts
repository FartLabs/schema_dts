// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCommunicateAction } from "./CommunicateAction.ts";

/** The act of notifying someone of information pertinent to them, with no expectation of a response. */
export interface ClassInformAction extends ClassCommunicateAction {
  /** Upcoming or past event associated with this place, organization, or action. */
  event: Array<{ "@id": string }>;
}
