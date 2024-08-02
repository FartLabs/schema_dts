// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalTest } from "./MedicalTest.ts";

/** Any collection of tests commonly ordered together. */
export interface ClassMedicalTestPanel extends ClassMedicalTest {
  /** A component test of the panel. */
  subTest: Array<{ "@id": string }>;
}
