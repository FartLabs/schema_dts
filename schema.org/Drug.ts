// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassSubstance } from "./Substance.ts";
import type { ClassProduct } from "./Product.ts";

/** A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them. */
export interface ClassDrug extends ClassSubstance, ClassProduct {
  /** An active ingredient, typically chemical compounds and/or biologic substances. */
  activeIngredient: Array<string>;
  /** A route by which this drug may be administered, e.g. 'oral'. */
  administrationRoute: Array<string>;
  /** Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug. */
  alcoholWarning: Array<string>;
  /** An available dosage strength for the drug. */
  availableStrength: Array<{ "@id": string }>;
  /** Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers. */
  breastfeedingWarning: Array<string>;
  /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). */
  clincalPharmacology: Array<string>;
  /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD). */
  clinicalPharmacology: Array<string>;
  /** A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'. */
  dosageForm: Array<string>;
  /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
  doseSchedule: Array<{ "@id": string }>;
  /** The class of drug this belongs to (e.g., statins). */
  drugClass: Array<{ "@id": string }>;
  /** The unit in which the drug is measured, e.g. '5 mg tablet'. */
  drugUnit: Array<string>;
  /** Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug. */
  foodWarning: Array<string>;
  /** The insurance plans that cover this drug. */
  includedInHealthInsurancePlan: Array<{ "@id": string }>;
  /** Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications. */
  interactingDrug: Array<{ "@id": string }>;
  /** True if the drug is available in a generic form (regardless of name). */
  isAvailableGenerically: Array<boolean>;
  /** True if this item's name is a proprietary/brand name (vs. generic name). */
  isProprietary: Array<boolean>;
  /** Link to the drug's label details. */
  labelDetails: Array<{ "@id": string }>;
  /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
  legalStatus: Array<string | { "@id": string }>;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  maximumIntake: Array<{ "@id": string }>;
  /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect. */
  mechanismOfAction: Array<string>;
  /** The generic name of this drug or supplement. */
  nonProprietaryName: Array<string>;
  /** Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response. */
  overdosage: Array<string>;
  /** Pregnancy category of this drug. */
  pregnancyCategory: Array<{ "@id": string }>;
  /** Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy. */
  pregnancyWarning: Array<string>;
  /** Link to prescribing information for the drug. */
  prescribingInfo: Array<{ "@id": string }>;
  /** Indicates the status of drug prescription, e.g. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc. */
  prescriptionStatus: Array<string | { "@id": string }>;
  /** Proprietary name given to the diet plan, typically by its originator or creator. */
  proprietaryName: Array<string>;
  /** Any other drug related to this one, for example commonly-prescribed alternatives. */
  relatedDrug: Array<{ "@id": string }>;
  /** The RxCUI drug identifier from RXNORM. */
  rxcui: Array<string>;
  /** Any FDA or other warnings about the drug (text or URL). */
  warning: Array<string | { "@id": string }>;
}
