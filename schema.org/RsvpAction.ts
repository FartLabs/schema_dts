// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassInformAction } from "./InformAction.ts";

/** The act of notifying an event organizer as to whether you expect to attend the event. */
export interface ClassRsvpAction extends ClassInformAction {
  /** If responding yes, the number of guests who will attend in addition to the invitee. */
  additionalNumberOfGuests: Array<number>;
  /** Comments, typically from users. */
  comment: Array<{ "@id": string }>;
  /** The response (yes, no, maybe) to the RSVP. */
  rsvpResponse: Array<{ "@id": string }>;
}
