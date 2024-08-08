// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Comment } from "./SchemaOrg_Comment.ts";
import type { SchemaOrg_InformAction } from "./SchemaOrg_InformAction.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_RsvpResponseType } from "./SchemaOrg_RsvpResponseType.ts";

/**
 * The act of notifying an event organizer as to whether you expect to attend the event.
 * @see https://schema.org/RsvpAction
 */
export const SCHEMA_ORG_RsvpAction = "https://schema.org/RsvpAction" as const;

/**
 * The act of notifying an event organizer as to whether you expect to attend the event.
 * @see https://schema.org/RsvpAction
 */
export interface SchemaOrg_RsvpAction extends SchemaOrg_InformAction {
    /**
     * If responding yes, the number of guests who will attend in addition to the invitee.
     * @see https://schema.org/additionalNumberOfGuests
     */
    additionalNumberOfGuests?: Array<SchemaOrg_Number>;
    /**
     * Comments, typically from users.
     * @see https://schema.org/comment
     */
    comment?: Array<SchemaOrg_Comment>;
    /**
     * The response (yes, no, maybe) to the RSVP.
     * @see https://schema.org/rsvpResponse
     */
    rsvpResponse?: Array<SchemaOrg_RsvpResponseType>;
}
