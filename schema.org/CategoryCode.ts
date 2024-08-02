// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassDefinedTerm } from "./DefinedTerm.ts";

/** A Category Code. */
export interface ClassCategoryCode extends ClassDefinedTerm {
  /** A short textual code that uniquely identifies the value. */
  codeValue: Array<string>;
  /** A [[CategoryCodeSet]] that contains this category code. */
  inCodeSet: Array<{ "@id": string }>;
}
