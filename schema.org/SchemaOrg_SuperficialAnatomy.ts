// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalTherapy } from "./SchemaOrg_MedicalTherapy.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure).
 * @see https://schema.org/SuperficialAnatomy
 */
export const SCHEMA_ORG_SuperficialAnatomy = "https://schema.org/SuperficialAnatomy" as const;

/**
 * Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure).
 * @see https://schema.org/SuperficialAnatomy
 */
export interface SchemaOrg_SuperficialAnatomy extends SchemaOrg_MedicalEntity {
    /**
     * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
     * @see https://schema.org/associatedPathophysiology
     */
    associatedPathophysiology?: Array<SchemaOrg_Text>;
    /**
     * Anatomical systems or structures that relate to the superficial anatomy.
     * @see https://schema.org/relatedAnatomy
     */
    relatedAnatomy?: Array<SchemaOrg_AnatomicalStructure | SchemaOrg_AnatomicalSystem>;
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
     * The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.
     * @see https://schema.org/significance
     */
    significance?: Array<SchemaOrg_Text>;
}
