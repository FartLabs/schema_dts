// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can include circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems. */
export interface ClassAnatomicalSystem extends ClassMedicalEntity {
  /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
  associatedPathophysiology: Array<string>;
  /** Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system. */
  comprisedOf: Array<{ "@id": string }>;
  /** A medical condition associated with this anatomy. */
  relatedCondition: Array<{ "@id": string }>;
  /** Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system. */
  relatedStructure: Array<{ "@id": string }>;
  /** A medical therapy related to this anatomy. */
  relatedTherapy: Array<{ "@id": string }>;
}
