// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalTest } from "./MedicalTest.ts";

/** Any medical imaging modality typically used for diagnostic purposes. */
export interface ClassImagingTest extends ClassMedicalTest {
  /** Imaging technique used. */
  imagingTechnique: Array<{ "@id": string }>;
}
