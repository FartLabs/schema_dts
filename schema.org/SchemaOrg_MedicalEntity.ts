// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DrugLegalStatus } from "labs/SchemaOrg_DrugLegalStatus.ts";
import type { SchemaOrg_Grant } from "labs/SchemaOrg_Grant.ts";
import type { SchemaOrg_MedicalCode } from "labs/SchemaOrg_MedicalCode.ts";
import type { SchemaOrg_MedicalEnumeration } from "labs/SchemaOrg_MedicalEnumeration.ts";
import type { SchemaOrg_MedicalGuideline } from "labs/SchemaOrg_MedicalGuideline.ts";
import type { SchemaOrg_MedicalSpecialty } from "labs/SchemaOrg_MedicalSpecialty.ts";
import type { SchemaOrg_MedicalStudy } from "labs/SchemaOrg_MedicalStudy.ts";
import type { SchemaOrg_MedicineSystem } from "labs/SchemaOrg_MedicineSystem.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";

/**
 * The most generic type of entity related to health and the practice of medicine.
 * @see https://schema.org/MedicalEntity
 */
export const SCHEMA_ORG_MedicalEntity = "https://schema.org/MedicalEntity" as const;

/**
 * The most generic type of entity related to health and the practice of medicine.
 * @see https://schema.org/MedicalEntity
 */
export interface SchemaOrg_MedicalEntity extends SchemaOrg_Thing {
    /**
     * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
     * @see https://schema.org/code
     */
    code: Array<SchemaOrg_MedicalCode>;
    /**
     * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
     * @see https://schema.org/funding
     */
    funding: Array<SchemaOrg_Grant>;
    /**
     * A medical guideline related to this entity.
     * @see https://schema.org/guideline
     */
    guideline: Array<SchemaOrg_MedicalGuideline>;
    /**
     * The drug or supplement's legal status, including any controlled substance schedules that apply.
     * @see https://schema.org/legalStatus
     */
    legalStatus: Array<SchemaOrg_Text | SchemaOrg_MedicalEnumeration | SchemaOrg_DrugLegalStatus>;
    /**
     * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
     * @see https://schema.org/medicineSystem
     */
    medicineSystem: Array<SchemaOrg_MedicineSystem>;
    /**
     * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
     * @see https://schema.org/recognizingAuthority
     */
    recognizingAuthority: Array<SchemaOrg_Organization>;
    /**
     * If applicable, a medical specialty in which this entity is relevant.
     * @see https://schema.org/relevantSpecialty
     */
    relevantSpecialty: Array<SchemaOrg_MedicalSpecialty>;
    /**
     * A medical study or trial related to this entity.
     * @see https://schema.org/study
     */
    study: Array<SchemaOrg_MedicalStudy>;
}
