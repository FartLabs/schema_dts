// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression. */
export interface ClassSolveMathAction extends ClassAction {
  /** For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard". */
  eduQuestionType: Array<string>;
}
