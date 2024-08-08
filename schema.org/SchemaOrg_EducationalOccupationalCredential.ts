// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 * @see https://schema.org/EducationalOccupationalCredential
 */
export const SCHEMA_ORG_EducationalOccupationalCredential =
  "https://schema.org/EducationalOccupationalCredential" as const;

/**
 * An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 * @see https://schema.org/EducationalOccupationalCredential
 */
export interface SchemaOrg_EducationalOccupationalCredential
  extends SchemaOrg_CreativeWork {
  /**
   * Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
   * @see https://schema.org/competencyRequired
   */
  competencyRequired?: Array<
    SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_DefinedTerm
  >;
  /**
   * The category or type of credential being described, for example "degree”, “certificate”, “badge”, or more specific term.
   * @see https://schema.org/credentialCategory
   */
  credentialCategory?: Array<
    SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL
  >;
  /**
   * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
   * @see https://schema.org/educationalLevel
   */
  educationalLevel?: Array<
    SchemaOrg_Text | SchemaOrg_DefinedTerm | SchemaOrg_URL
  >;
  /**
   * An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.
   * @see https://schema.org/recognizedBy
   */
  recognizedBy?: Array<SchemaOrg_Organization>;
  /**
   * The duration of validity of a permit or similar thing.
   * @see https://schema.org/validFor
   */
  validFor?: Array<SchemaOrg_Duration>;
  /**
   * The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]].
   * @see https://schema.org/validIn
   */
  validIn?: Array<SchemaOrg_AdministrativeArea>;
}
