// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer. */
export interface ClassEducationalOccupationalCredential
  extends ClassCreativeWork {
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource. */
  competencyRequired: Array<string | { "@id": string }>;
  /** The category or type of credential being described, for example "degree”, “certificate”, “badge”, or more specific term. */
  credentialCategory: Array<string | { "@id": string }>;
  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
  educationalLevel: Array<string | { "@id": string }>;
  /** An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation. */
  recognizedBy: Array<{ "@id": string }>;
  /** The duration of validity of a permit or similar thing. */
  validFor: Array<{ "@id": string }>;
  /** The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. */
  validIn: Array<{ "@id": string }>;
}
