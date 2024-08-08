// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_ImageObject } from "./SchemaOrg_ImageObject.ts";
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalTherapy } from "./SchemaOrg_MedicalTherapy.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 * @see https://schema.org/AnatomicalStructure
 */
export const SCHEMA_ORG_AnatomicalStructure = "https://schema.org/AnatomicalStructure" as const;

/**
 * Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 * @see https://schema.org/AnatomicalStructure
 */
export interface SchemaOrg_AnatomicalStructure extends SchemaOrg_MedicalEntity {
    /**
     * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
     * @see https://schema.org/associatedPathophysiology
     */
    associatedPathophysiology?: Array<SchemaOrg_Text>;
    /**
     * Location in the body of the anatomical structure.
     * @see https://schema.org/bodyLocation
     */
    bodyLocation?: Array<SchemaOrg_Text>;
    /**
     * Other anatomical structures to which this structure is connected.
     * @see https://schema.org/connectedTo
     */
    connectedTo?: Array<SchemaOrg_AnatomicalStructure>;
    /**
     * An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
     * @see https://schema.org/diagram
     */
    diagram?: Array<SchemaOrg_ImageObject>;
    /**
     * The anatomical or organ system that this structure is part of.
     * @see https://schema.org/partOfSystem
     */
    partOfSystem?: Array<SchemaOrg_AnatomicalSystem>;
    /**
     * A medical condition associated with this anatomy.
     * @see https://schema.org/relatedCondition
     */
    relatedCondition?: Array<SchemaOrg_MedicalCondition>;
    /**
     * A medical therapy related to this anatomy.
     * @see https://schema.org/relatedTherapy
     */
    relatedTherapy?: Array<SchemaOrg_MedicalTherapy>;
    /**
     * Component (sub-)structure(s) that comprise this anatomical structure.
     * @see https://schema.org/subStructure
     */
    subStructure?: Array<SchemaOrg_AnatomicalStructure>;
}
