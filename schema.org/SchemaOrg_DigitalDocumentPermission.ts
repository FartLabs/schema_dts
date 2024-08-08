// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_DigitalDocumentPermissionType } from "./SchemaOrg_DigitalDocumentPermissionType.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * A permission for a particular person or group to access a particular file.
 * @see https://schema.org/DigitalDocumentPermission
 */
export const SCHEMA_ORG_DigitalDocumentPermission = "https://schema.org/DigitalDocumentPermission" as const;

/**
 * A permission for a particular person or group to access a particular file.
 * @see https://schema.org/DigitalDocumentPermission
 */
export interface SchemaOrg_DigitalDocumentPermission extends SchemaOrg_Intangible {
    /**
     * The person, organization, contact point, or audience that has been granted this permission.
     * @see https://schema.org/grantee
     */
    grantee?: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
    /**
     * The type of permission granted the person, organization, or audience.
     * @see https://schema.org/permissionType
     */
    permissionType?: Array<SchemaOrg_DigitalDocumentPermissionType>;
}
