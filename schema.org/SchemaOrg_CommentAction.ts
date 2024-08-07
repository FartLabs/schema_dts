// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Comment } from "labs/SchemaOrg_Comment.ts";
import type { SchemaOrg_CommunicateAction } from "labs/SchemaOrg_CommunicateAction.ts";

/**
 * The act of generating a comment about a subject.
 * @see https://schema.org/CommentAction
 */
export const SCHEMA_ORG_CommentAction = "https://schema.org/CommentAction" as const;

/**
 * The act of generating a comment about a subject.
 * @see https://schema.org/CommentAction
 */
export interface SchemaOrg_CommentAction extends SchemaOrg_CommunicateAction {
    /**
     * A sub property of result. The Comment created or sent as a result of this action.
     * @see https://schema.org/resultComment
     */
    resultComment: Array<SchemaOrg_Comment>;
}
