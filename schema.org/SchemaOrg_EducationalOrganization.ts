// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CivicStructure } from "./SchemaOrg_CivicStructure.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * An educational organization.
 * @see https://schema.org/EducationalOrganization
 */
export const SCHEMA_ORG_EducationalOrganization =
  "https://schema.org/EducationalOrganization" as const;

/**
 * An educational organization.
 * @see https://schema.org/EducationalOrganization
 */
export interface SchemaOrg_EducationalOrganization
  extends SchemaOrg_CivicStructure, SchemaOrg_Organization {
  /**
   * Alumni of an organization.
   * @see https://schema.org/alumni
   */
  alumni?: Array<SchemaOrg_Person>;
}
