// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
 * @see https://schema.org/SolveMathAction
 */
export const SCHEMA_ORG_SolveMathAction =
  "https://schema.org/SolveMathAction" as const;

/**
 * The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
 * @see https://schema.org/SolveMathAction
 */
export interface SchemaOrg_SolveMathAction extends SchemaOrg_Action {
  /**
   * For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
   * @see https://schema.org/eduQuestionType
   */
  eduQuestionType?: Array<SchemaOrg_Text>;
}
