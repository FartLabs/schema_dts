// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Comment } from "./SchemaOrg_Comment.ts";
import type { SchemaOrg_CommunicateAction } from "./SchemaOrg_CommunicateAction.ts";

/**
 * The act of responding to a question/message asked/sent by the object. Related to [[AskAction]].\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 * @see https://schema.org/ReplyAction
 */
export const SCHEMA_ORG_ReplyAction = "https://schema.org/ReplyAction" as const;

/**
 * The act of responding to a question/message asked/sent by the object. Related to [[AskAction]].\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 * @see https://schema.org/ReplyAction
 */
export interface SchemaOrg_ReplyAction extends SchemaOrg_CommunicateAction {
  /**
   * A sub property of result. The Comment created or sent as a result of this action.
   * @see https://schema.org/resultComment
   */
  resultComment?: Array<SchemaOrg_Comment>;
}
