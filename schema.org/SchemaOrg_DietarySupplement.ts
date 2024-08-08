// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DrugLegalStatus } from "./SchemaOrg_DrugLegalStatus.ts";
import type { SchemaOrg_MaximumDoseSchedule } from "./SchemaOrg_MaximumDoseSchedule.ts";
import type { SchemaOrg_MedicalEnumeration } from "./SchemaOrg_MedicalEnumeration.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_RecommendedDoseSchedule } from "./SchemaOrg_RecommendedDoseSchedule.ts";
import type { SchemaOrg_Substance } from "./SchemaOrg_Substance.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
 * @see https://schema.org/DietarySupplement
 */
export const SCHEMA_ORG_DietarySupplement =
  "https://schema.org/DietarySupplement" as const;

/**
 * A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
 * @see https://schema.org/DietarySupplement
 */
export interface SchemaOrg_DietarySupplement
  extends SchemaOrg_Substance, SchemaOrg_Product {
  /**
   * An active ingredient, typically chemical compounds and/or biologic substances.
   * @see https://schema.org/activeIngredient
   */
  activeIngredient?: Array<SchemaOrg_Text>;
  /**
   * True if this item's name is a proprietary/brand name (vs. generic name).
   * @see https://schema.org/isProprietary
   */
  isProprietary?: Array<SchemaOrg_Boolean>;
  /**
   * The drug or supplement's legal status, including any controlled substance schedules that apply.
   * @see https://schema.org/legalStatus
   */
  legalStatus?: Array<
    SchemaOrg_Text | SchemaOrg_MedicalEnumeration | SchemaOrg_DrugLegalStatus
  >;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/maximumIntake
   */
  maximumIntake?: Array<SchemaOrg_MaximumDoseSchedule>;
  /**
   * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
   * @see https://schema.org/mechanismOfAction
   */
  mechanismOfAction?: Array<SchemaOrg_Text>;
  /**
   * The generic name of this drug or supplement.
   * @see https://schema.org/nonProprietaryName
   */
  nonProprietaryName?: Array<SchemaOrg_Text>;
  /**
   * Proprietary name given to the diet plan, typically by its originator or creator.
   * @see https://schema.org/proprietaryName
   */
  proprietaryName?: Array<SchemaOrg_Text>;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/recommendedIntake
   */
  recommendedIntake?: Array<SchemaOrg_RecommendedDoseSchedule>;
  /**
   * Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.
   * @see https://schema.org/safetyConsideration
   */
  safetyConsideration?: Array<SchemaOrg_Text>;
  /**
   * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
   * @see https://schema.org/targetPopulation
   */
  targetPopulation?: Array<SchemaOrg_Text>;
}
