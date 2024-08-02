// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A math solver which is capable of solving a subset of mathematical problems. */
export interface ClassMathSolver extends ClassCreativeWork {
  /** A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard. */
  mathExpression: Array<string | { "@id": string }>;
}
