// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup. */
export interface ClassDrugCost extends ClassMedicalEntity {
  /** The location in which the status applies. */
  applicableLocation: Array<{ "@id": string }>;
  /** The category of cost, such as wholesale, retail, reimbursement cap, etc. */
  costCategory: Array<{ "@id": string }>;
  /** The currency (in 3-letter) of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. */
  costCurrency: Array<string>;
  /** Additional details to capture the origin of the cost data. For example, 'Medicare Part B'. */
  costOrigin: Array<string>;
  /** The cost per unit of the drug. */
  costPerUnit: Array<number | string | { "@id": string }>;
  /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
  drugUnit: Array<string>;
}
