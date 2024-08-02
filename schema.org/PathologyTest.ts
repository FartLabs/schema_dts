// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalTest } from "./MedicalTest.ts";

/** A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist. */
export interface ClassPathologyTest extends ClassMedicalTest {
  /** The type of tissue sample required for the test. */
  tissueSample: Array<string>;
}
