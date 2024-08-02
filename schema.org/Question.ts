// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassComment } from "./Comment.ts";

/** A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. */
export interface ClassQuestion extends ClassComment {
  /** The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author. */
  acceptedAnswer: Array<{ "@id": string }>;
  /** The number of answers this question has received. */
  answerCount: Array<{ "@id": string }>;
  /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
  eduQuestionType: Array<string>;
  /** The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it. */
  parentItem: Array<{ "@id": string }>;
  /** An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site. */
  suggestedAnswer: Array<{ "@id": string }>;
}
