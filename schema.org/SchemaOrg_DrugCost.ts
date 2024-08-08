// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_DrugCostCategory } from "./SchemaOrg_DrugCostCategory.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
 * @see https://schema.org/DrugCost
 */
export const SCHEMA_ORG_DrugCost = "https://schema.org/DrugCost" as const;

/**
 * The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
 * @see https://schema.org/DrugCost
 */
export interface SchemaOrg_DrugCost extends SchemaOrg_MedicalEntity {
  /**
   * The location in which the status applies.
   * @see https://schema.org/applicableLocation
   */
  applicableLocation?: Array<SchemaOrg_AdministrativeArea>;
  /**
   * The category of cost, such as wholesale, retail, reimbursement cap, etc.
   * @see https://schema.org/costCategory
   */
  costCategory?: Array<SchemaOrg_DrugCostCategory>;
  /**
   * The currency (in 3-letter) of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217.
   * @see https://schema.org/costCurrency
   */
  costCurrency?: Array<SchemaOrg_Text>;
  /**
   * Additional details to capture the origin of the cost data. For example, 'Medicare Part B'.
   * @see https://schema.org/costOrigin
   */
  costOrigin?: Array<SchemaOrg_Text>;
  /**
   * The cost per unit of the drug.
   * @see https://schema.org/costPerUnit
   */
  costPerUnit?: Array<
    SchemaOrg_Text | SchemaOrg_Number | SchemaOrg_QualitativeValue
  >;
  /**
   * The unit in which the drug is measured, e.g. '5 mg tablet'.
   * @see https://schema.org/drugUnit
   */
  drugUnit?: Array<SchemaOrg_Text>;
}
