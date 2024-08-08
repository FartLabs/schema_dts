// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Comment } from "./SchemaOrg_Comment.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_WebContent } from "./SchemaOrg_WebContent.ts";

/**
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 * @see https://schema.org/Answer
 */
export const SCHEMA_ORG_Answer = "https://schema.org/Answer" as const;

/**
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 * @see https://schema.org/Answer
 */
export interface SchemaOrg_Answer extends SchemaOrg_Comment {
    /**
     * A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it.
     * @see https://schema.org/answerExplanation
     */
    answerExplanation?: Array<SchemaOrg_Comment | SchemaOrg_WebContent>;
    /**
     * The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.
     * @see https://schema.org/parentItem
     */
    parentItem?: Array<SchemaOrg_CreativeWork | SchemaOrg_Comment>;
}
