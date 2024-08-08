// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An EducationalAudience.
 * @see https://schema.org/EducationalAudience
 */
export const SCHEMA_ORG_EducationalAudience =
  "https://schema.org/EducationalAudience" as const;

/**
 * An EducationalAudience.
 * @see https://schema.org/EducationalAudience
 */
export interface SchemaOrg_EducationalAudience extends SchemaOrg_Audience {
  /**
   * An educationalRole of an EducationalAudience.
   * @see https://schema.org/educationalRole
   */
  educationalRole?: Array<SchemaOrg_Text>;
}
