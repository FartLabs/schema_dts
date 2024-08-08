// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CommunicateAction } from "./SchemaOrg_CommunicateAction.ts";
import type { SchemaOrg_Question } from "./SchemaOrg_Question.ts";

/**
 * The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 * @see https://schema.org/AskAction
 */
export const SCHEMA_ORG_AskAction = "https://schema.org/AskAction" as const;

/**
 * The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 * @see https://schema.org/AskAction
 */
export interface SchemaOrg_AskAction extends SchemaOrg_CommunicateAction {
    /**
     * A sub property of object. A question.
     * @see https://schema.org/question
     */
    question?: Array<SchemaOrg_Question>;
}
