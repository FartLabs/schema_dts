// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DoseSchedule } from "./SchemaOrg_DoseSchedule.ts";
import type { SchemaOrg_Drug } from "./SchemaOrg_Drug.ts";
import type { SchemaOrg_DrugClass } from "./SchemaOrg_DrugClass.ts";
import type { SchemaOrg_DrugLegalStatus } from "./SchemaOrg_DrugLegalStatus.ts";
import type { SchemaOrg_DrugPregnancyCategory } from "./SchemaOrg_DrugPregnancyCategory.ts";
import type { SchemaOrg_DrugPrescriptionStatus } from "./SchemaOrg_DrugPrescriptionStatus.ts";
import type { SchemaOrg_DrugStrength } from "./SchemaOrg_DrugStrength.ts";
import type { SchemaOrg_HealthInsurancePlan } from "./SchemaOrg_HealthInsurancePlan.ts";
import type { SchemaOrg_MaximumDoseSchedule } from "./SchemaOrg_MaximumDoseSchedule.ts";
import type { SchemaOrg_MedicalEnumeration } from "./SchemaOrg_MedicalEnumeration.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_Substance } from "./SchemaOrg_Substance.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them.
 * @see https://schema.org/Drug
 */
export const SCHEMA_ORG_Drug = "https://schema.org/Drug" as const;

/**
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge makes a clear difference between them.
 * @see https://schema.org/Drug
 */
export interface SchemaOrg_Drug extends SchemaOrg_Substance, SchemaOrg_Product {
    /**
     * An active ingredient, typically chemical compounds and/or biologic substances.
     * @see https://schema.org/activeIngredient
     */
    activeIngredient?: Array<SchemaOrg_Text>;
    /**
     * A route by which this drug may be administered, e.g. 'oral'.
     * @see https://schema.org/administrationRoute
     */
    administrationRoute?: Array<SchemaOrg_Text>;
    /**
     * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
     * @see https://schema.org/alcoholWarning
     */
    alcoholWarning?: Array<SchemaOrg_Text>;
    /**
     * An available dosage strength for the drug.
     * @see https://schema.org/availableStrength
     */
    availableStrength?: Array<SchemaOrg_DrugStrength>;
    /**
     * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
     * @see https://schema.org/breastfeedingWarning
     */
    breastfeedingWarning?: Array<SchemaOrg_Text>;
    /**
     * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
     * @see https://schema.org/clincalPharmacology
     */
    clincalPharmacology?: Array<SchemaOrg_Text>;
    /**
     * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
     * @see https://schema.org/clinicalPharmacology
     */
    clinicalPharmacology?: Array<SchemaOrg_Text>;
    /**
     * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
     * @see https://schema.org/dosageForm
     */
    dosageForm?: Array<SchemaOrg_Text>;
    /**
     * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
     * @see https://schema.org/doseSchedule
     */
    doseSchedule?: Array<SchemaOrg_DoseSchedule>;
    /**
     * The class of drug this belongs to (e.g., statins).
     * @see https://schema.org/drugClass
     */
    drugClass?: Array<SchemaOrg_DrugClass>;
    /**
     * The unit in which the drug is measured, e.g. '5 mg tablet'.
     * @see https://schema.org/drugUnit
     */
    drugUnit?: Array<SchemaOrg_Text>;
    /**
     * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
     * @see https://schema.org/foodWarning
     */
    foodWarning?: Array<SchemaOrg_Text>;
    /**
     * The insurance plans that cover this drug.
     * @see https://schema.org/includedInHealthInsurancePlan
     */
    includedInHealthInsurancePlan?: Array<SchemaOrg_HealthInsurancePlan>;
    /**
     * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
     * @see https://schema.org/interactingDrug
     */
    interactingDrug?: Array<SchemaOrg_Drug>;
    /**
     * True if the drug is available in a generic form (regardless of name).
     * @see https://schema.org/isAvailableGenerically
     */
    isAvailableGenerically?: Array<SchemaOrg_Boolean>;
    /**
     * True if this item's name is a proprietary/brand name (vs. generic name).
     * @see https://schema.org/isProprietary
     */
    isProprietary?: Array<SchemaOrg_Boolean>;
    /**
     * Link to the drug's label details.
     * @see https://schema.org/labelDetails
     */
    labelDetails?: Array<SchemaOrg_URL>;
    /**
     * The drug or supplement's legal status, including any controlled substance schedules that apply.
     * @see https://schema.org/legalStatus
     */
    legalStatus?: Array<SchemaOrg_Text | SchemaOrg_MedicalEnumeration | SchemaOrg_DrugLegalStatus>;
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
     * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
     * @see https://schema.org/overdosage
     */
    overdosage?: Array<SchemaOrg_Text>;
    /**
     * Pregnancy category of this drug.
     * @see https://schema.org/pregnancyCategory
     */
    pregnancyCategory?: Array<SchemaOrg_DrugPregnancyCategory>;
    /**
     * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
     * @see https://schema.org/pregnancyWarning
     */
    pregnancyWarning?: Array<SchemaOrg_Text>;
    /**
     * Link to prescribing information for the drug.
     * @see https://schema.org/prescribingInfo
     */
    prescribingInfo?: Array<SchemaOrg_URL>;
    /**
     * Indicates the status of drug prescription, e.g. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
     * @see https://schema.org/prescriptionStatus
     */
    prescriptionStatus?: Array<SchemaOrg_Text | SchemaOrg_DrugPrescriptionStatus>;
    /**
     * Proprietary name given to the diet plan, typically by its originator or creator.
     * @see https://schema.org/proprietaryName
     */
    proprietaryName?: Array<SchemaOrg_Text>;
    /**
     * Any other drug related to this one, for example commonly-prescribed alternatives.
     * @see https://schema.org/relatedDrug
     */
    relatedDrug?: Array<SchemaOrg_Drug>;
    /**
     * The RxCUI drug identifier from RXNORM.
     * @see https://schema.org/rxcui
     */
    rxcui?: Array<SchemaOrg_Text>;
    /**
     * Any FDA or other warnings about the drug (text or URL).
     * @see https://schema.org/warning
     */
    warning?: Array<SchemaOrg_URL | SchemaOrg_Text>;
}
