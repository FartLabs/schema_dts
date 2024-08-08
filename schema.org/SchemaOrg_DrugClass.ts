// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Drug } from "./SchemaOrg_Drug.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";

/**
 * A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 * @see https://schema.org/DrugClass
 */
export const SCHEMA_ORG_DrugClass = "https://schema.org/DrugClass" as const;

/**
 * A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 * @see https://schema.org/DrugClass
 */
export interface SchemaOrg_DrugClass extends SchemaOrg_MedicalEntity {
  /**
   * Specifying a drug or medicine used in a medication procedure.
   * @see https://schema.org/drug
   */
  drug?: Array<SchemaOrg_Drug>;
}
