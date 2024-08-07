// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "labs/SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";

/**
 * A single message from a sender to one or more organizations or people.
 * @see https://schema.org/Message
 */
export const SCHEMA_ORG_Message = "https://schema.org/Message" as const;

/**
 * A single message from a sender to one or more organizations or people.
 * @see https://schema.org/Message
 */
export interface SchemaOrg_Message extends SchemaOrg_CreativeWork {
    /**
     * A sub property of recipient. The recipient blind copied on a message.
     * @see https://schema.org/bccRecipient
     */
    bccRecipient: Array<SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
    /**
     * A sub property of recipient. The recipient copied on a message.
     * @see https://schema.org/ccRecipient
     */
    ccRecipient: Array<SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
    /**
     * The date/time at which the message has been read by the recipient if a single recipient exists.
     * @see https://schema.org/dateRead
     */
    dateRead: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The date/time the message was received if a single recipient exists.
     * @see https://schema.org/dateReceived
     */
    dateReceived: Array<SchemaOrg_DateTime>;
    /**
     * The date/time at which the message was sent.
     * @see https://schema.org/dateSent
     */
    dateSent: Array<SchemaOrg_DateTime>;
    /**
     * A CreativeWork attached to the message.
     * @see https://schema.org/messageAttachment
     */
    messageAttachment: Array<SchemaOrg_CreativeWork>;
    /**
     * A sub property of participant. The participant who is at the receiving end of the action.
     * @see https://schema.org/recipient
     */
    recipient: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
    /**
     * A sub property of participant. The participant who is at the sending end of the action.
     * @see https://schema.org/sender
     */
    sender: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A sub property of recipient. The recipient who was directly sent the message.
     * @see https://schema.org/toRecipient
     */
    toRecipient: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
}
