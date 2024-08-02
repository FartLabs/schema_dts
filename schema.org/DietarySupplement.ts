// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassSubstance } from "./Substance.ts";
import type { ClassProduct } from "./Product.ts";

/** A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites. */
export interface ClassDietarySupplement extends ClassSubstance, ClassProduct {
  /** An active ingredient, typically chemical compounds and/or biologic substances. */
  activeIngredient: Array<string>;
  /** True if this item's name is a proprietary/brand name (vs. generic name). */
  isProprietary: Array<boolean>;
  /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
  legalStatus: Array<string | { "@id": string }>;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  maximumIntake: Array<{ "@id": string }>;
  /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
  mechanismOfAction: Array<string>;
  /** The generic name of this drug or supplement. */
  nonProprietaryName: Array<string>;
  /** Proprietary name given to the diet plan, typically by its originator or creator. */
  proprietaryName: Array<string>;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  recommendedIntake: Array<{ "@id": string }>;
  /** Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement. */
  safetyConsideration: Array<string>;
  /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
  targetPopulation: Array<string>;
}
