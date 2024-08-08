// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Role } from "./SchemaOrg_Role.ts";

/**
 * A subclass of Role used to describe roles within organizations.
 * @see https://schema.org/OrganizationRole
 */
export const SCHEMA_ORG_OrganizationRole = "https://schema.org/OrganizationRole" as const;

/**
 * A subclass of Role used to describe roles within organizations.
 * @see https://schema.org/OrganizationRole
 */
export interface SchemaOrg_OrganizationRole extends SchemaOrg_Role {
    /**
     * A number associated with a role in an organization, for example, the number on an athlete's jersey.
     * @see https://schema.org/numberedPosition
     */
    numberedPosition?: Array<SchemaOrg_Number>;
}
