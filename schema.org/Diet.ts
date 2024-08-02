// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLifestyleModification } from "./LifestyleModification.ts";
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A strategy of regulating the intake of food to achieve or maintain a specific health-related goal. */
export interface ClassDiet
  extends ClassLifestyleModification, ClassCreativeWork {
  /** Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines. */
  dietFeatures: Array<string>;
  /** People or organizations that endorse the plan. */
  endorsers: Array<{ "@id": string }>;
  /** Medical expert advice related to the plan. */
  expertConsiderations: Array<string>;
  /** Specific physiologic benefits associated to the plan. */
  physiologicalBenefits: Array<string>;
  /** Specific physiologic risks associated to the diet plan. */
  risks: Array<string>;
}
