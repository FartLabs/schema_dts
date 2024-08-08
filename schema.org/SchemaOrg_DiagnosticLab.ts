// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalOrganization } from "./SchemaOrg_MedicalOrganization.ts";
import type { SchemaOrg_MedicalTest } from "./SchemaOrg_MedicalTest.ts";

/**
 * A medical laboratory that offers on-site or off-site diagnostic services.
 * @see https://schema.org/DiagnosticLab
 */
export const SCHEMA_ORG_DiagnosticLab =
  "https://schema.org/DiagnosticLab" as const;

/**
 * A medical laboratory that offers on-site or off-site diagnostic services.
 * @see https://schema.org/DiagnosticLab
 */
export interface SchemaOrg_DiagnosticLab extends SchemaOrg_MedicalOrganization {
  /**
   * A diagnostic test or procedure offered by this lab.
   * @see https://schema.org/availableTest
   */
  availableTest?: Array<SchemaOrg_MedicalTest>;
}
