// DO NOT EDIT: This file is generated.
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Web applications.
 * @see https://schema.org/WebApplication
 */
export const SCHEMA_ORG_WebApplication = "https://schema.org/WebApplication" as const;

/**
 * Web applications.
 * @see https://schema.org/WebApplication
 */
export interface SchemaOrg_WebApplication extends SchemaOrg_SoftwareApplication {
    /**
     * Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.
     * @see https://schema.org/browserRequirements
     */
    browserRequirements?: Array<SchemaOrg_Text>;
}
