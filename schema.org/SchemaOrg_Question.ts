// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Answer } from "labs/SchemaOrg_Answer.ts";
import type { SchemaOrg_Comment } from "labs/SchemaOrg_Comment.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_ItemList } from "labs/SchemaOrg_ItemList.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 * @see https://schema.org/Question
 */
export const SCHEMA_ORG_Question = "https://schema.org/Question" as const;

/**
 * A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 * @see https://schema.org/Question
 */
export interface SchemaOrg_Question extends SchemaOrg_Comment {
    /**
     * The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.
     * @see https://schema.org/acceptedAnswer
     */
    acceptedAnswer: Array<SchemaOrg_ItemList | SchemaOrg_Answer>;
    /**
     * The number of answers this question has received.
     * @see https://schema.org/answerCount
     */
    answerCount: Array<SchemaOrg_Integer>;
    /**
     * For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
     * @see https://schema.org/eduQuestionType
     */
    eduQuestionType: Array<SchemaOrg_Text>;
    /**
     * The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.
     * @see https://schema.org/parentItem
     */
    parentItem: Array<SchemaOrg_CreativeWork | SchemaOrg_Comment>;
    /**
     * An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.
     * @see https://schema.org/suggestedAnswer
     */
    suggestedAnswer: Array<SchemaOrg_ItemList | SchemaOrg_Answer>;
}
