// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCommunicateAction } from "./CommunicateAction.ts";

/** The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction. */
export interface ClassAskAction extends ClassCommunicateAction {
  /** A sub property of object. A question. */
  question: Array<{ "@id": string }>;
}
