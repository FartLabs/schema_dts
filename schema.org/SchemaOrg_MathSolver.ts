// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_SolveMathAction } from "./SchemaOrg_SolveMathAction.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A math solver which is capable of solving a subset of mathematical problems.
 * @see https://schema.org/MathSolver
 */
export const SCHEMA_ORG_MathSolver = "https://schema.org/MathSolver" as const;

/**
 * A math solver which is capable of solving a subset of mathematical problems.
 * @see https://schema.org/MathSolver
 */
export interface SchemaOrg_MathSolver extends SchemaOrg_CreativeWork {
  /**
   * A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard.
   * @see https://schema.org/mathExpression
   */
  mathExpression?: Array<SchemaOrg_Text | SchemaOrg_SolveMathAction>;
}
