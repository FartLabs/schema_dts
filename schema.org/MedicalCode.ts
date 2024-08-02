// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCategoryCode } from "./CategoryCode.ts";
import type { ClassMedicalIntangible } from "./MedicalIntangible.ts";

/** A code for a medical entity. */
export interface ClassMedicalCode
  extends ClassCategoryCode, ClassMedicalIntangible {
  /** A short textual code that uniquely identifies the value. */
  codeValue: Array<string>;
  /** The coding system, e.g. 'ICD-10'. */
  codingSystem: Array<string>;
}
