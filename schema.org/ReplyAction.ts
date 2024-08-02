// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCommunicateAction } from "./CommunicateAction.ts";

/** The act of responding to a question/message asked/sent by the object. Related to [[AskAction]].\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction. */
export interface ClassReplyAction extends ClassCommunicateAction {
  /** A sub property of result. The Comment created or sent as a result of this action. */
  resultComment: Array<{ "@id": string }>;
}
