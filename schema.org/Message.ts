// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A single message from a sender to one or more organizations or people. */
export interface ClassMessage extends ClassCreativeWork {
  /** A sub property of recipient. The recipient blind copied on a message. */
  bccRecipient: Array<{ "@id": string }>;
  /** A sub property of recipient. The recipient copied on a message. */
  ccRecipient: Array<{ "@id": string }>;
  /** The date/time at which the message has been read by the recipient if a single recipient exists. */
  dateRead: Array<string>;
  /** The date/time the message was received if a single recipient exists. */
  dateReceived: Array<string>;
  /** The date/time at which the message was sent. */
  dateSent: Array<string>;
  /** A CreativeWork attached to the message. */
  messageAttachment: Array<{ "@id": string }>;
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: Array<{ "@id": string }>;
  /** A sub property of participant. The participant who is at the sending end of the action. */
  sender: Array<{ "@id": string }>;
  /** A sub property of recipient. The recipient who was directly sent the message. */
  toRecipient: Array<{ "@id": string }>;
}
