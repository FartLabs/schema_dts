// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalTherapy } from "./SchemaOrg_MedicalTherapy.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 * @see https://schema.org/AnatomicalSystem
 */
export const SCHEMA_ORG_AnatomicalSystem = "https://schema.org/AnatomicalSystem" as const;

/**
 * An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 * @see https://schema.org/AnatomicalSystem
 */
export interface SchemaOrg_AnatomicalSystem extends SchemaOrg_MedicalEntity {
    /**
     * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
     * @see https://schema.org/associatedPathophysiology
     */
    associatedPathophysiology?: Array<SchemaOrg_Text>;
    /**
     * Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system.
     * @see https://schema.org/comprisedOf
     */
    comprisedOf?: Array<SchemaOrg_AnatomicalStructure | SchemaOrg_AnatomicalSystem>;
    /**
     * A medical condition associated with this anatomy.
     * @see https://schema.org/relatedCondition
     */
    relatedCondition?: Array<SchemaOrg_MedicalCondition>;
    /**
     * Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.
     * @see https://schema.org/relatedStructure
     */
    relatedStructure?: Array<SchemaOrg_AnatomicalStructure>;
    /**
     * A medical therapy related to this anatomy.
     * @see https://schema.org/relatedTherapy
     */
    relatedTherapy?: Array<SchemaOrg_MedicalTherapy>;
}
