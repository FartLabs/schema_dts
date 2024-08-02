// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalOrganization } from "./MedicalOrganization.ts";

/** A medical laboratory that offers on-site or off-site diagnostic services. */
export interface ClassDiagnosticLab extends ClassMedicalOrganization {
  /** A diagnostic test or procedure offered by this lab. */
  availableTest: Array<{ "@id": string }>;
}
