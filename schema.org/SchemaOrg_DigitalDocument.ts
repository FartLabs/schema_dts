// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DigitalDocumentPermission } from "./SchemaOrg_DigitalDocumentPermission.ts";

/**
 * An electronic file or document.
 * @see https://schema.org/DigitalDocument
 */
export const SCHEMA_ORG_DigitalDocument = "https://schema.org/DigitalDocument" as const;

/**
 * An electronic file or document.
 * @see https://schema.org/DigitalDocument
 */
export interface SchemaOrg_DigitalDocument extends SchemaOrg_CreativeWork {
    /**
     * A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public".
     * @see https://schema.org/hasDigitalDocumentPermission
     */
    hasDigitalDocumentPermission?: Array<SchemaOrg_DigitalDocumentPermission>;
}
