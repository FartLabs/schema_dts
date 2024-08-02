// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCommunicateAction } from "./CommunicateAction.ts";

/** The act of generating a comment about a subject. */
export interface ClassCommentAction extends ClassCommunicateAction {
  /** A sub property of result. The Comment created or sent as a result of this action. */
  resultComment: Array<{ "@id": string }>;
}
