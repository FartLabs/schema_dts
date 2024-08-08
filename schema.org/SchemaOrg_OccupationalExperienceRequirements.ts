// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";

/**
 * Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
 * @see https://schema.org/OccupationalExperienceRequirements
 */
export const SCHEMA_ORG_OccupationalExperienceRequirements =
  "https://schema.org/OccupationalExperienceRequirements" as const;

/**
 * Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
 * @see https://schema.org/OccupationalExperienceRequirements
 */
export interface SchemaOrg_OccupationalExperienceRequirements
  extends SchemaOrg_Intangible {
  /**
   * Indicates the minimal number of months of experience required for a position.
   * @see https://schema.org/monthsOfExperience
   */
  monthsOfExperience?: Array<SchemaOrg_Number>;
}
