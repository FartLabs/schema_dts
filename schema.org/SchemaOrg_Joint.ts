// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "labs/SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_MedicalEntity } from "labs/SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * The anatomical location at which two or more bones make contact.
 * @see https://schema.org/Joint
 */
export const SCHEMA_ORG_Joint = "https://schema.org/Joint" as const;

/**
 * The anatomical location at which two or more bones make contact.
 * @see https://schema.org/Joint
 */
export interface SchemaOrg_Joint extends SchemaOrg_AnatomicalStructure {
    /**
     * The biomechanical properties of the bone.
     * @see https://schema.org/biomechnicalClass
     */
    biomechnicalClass: Array<SchemaOrg_Text>;
    /**
     * The degree of mobility the joint allows.
     * @see https://schema.org/functionalClass
     */
    functionalClass: Array<SchemaOrg_MedicalEntity | SchemaOrg_Text>;
    /**
     * The name given to how bone physically connects to each other.
     * @see https://schema.org/structuralClass
     */
    structuralClass: Array<SchemaOrg_Text>;
}
