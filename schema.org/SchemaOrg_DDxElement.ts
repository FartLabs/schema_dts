// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalIntangible } from "./SchemaOrg_MedicalIntangible.ts";
import type { SchemaOrg_MedicalSignOrSymptom } from "./SchemaOrg_MedicalSignOrSymptom.ts";

/**
 * An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 * @see https://schema.org/DDxElement
 */
export const SCHEMA_ORG_DDxElement = "https://schema.org/DDxElement" as const;

/**
 * An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 * @see https://schema.org/DDxElement
 */
export interface SchemaOrg_DDxElement extends SchemaOrg_MedicalIntangible {
  /**
   * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
   * @see https://schema.org/diagnosis
   */
  diagnosis?: Array<SchemaOrg_MedicalCondition>;
  /**
   * One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.
   * @see https://schema.org/distinguishingSign
   */
  distinguishingSign?: Array<SchemaOrg_MedicalSignOrSymptom>;
}
