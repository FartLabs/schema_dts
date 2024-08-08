// DO NOT EDIT: This file is generated.
import type { SchemaOrg_LegalValueLevel } from "./SchemaOrg_LegalValueLevel.ts";
import type { SchemaOrg_Legislation } from "./SchemaOrg_Legislation.ts";
import type { SchemaOrg_MediaObject } from "./SchemaOrg_MediaObject.ts";

/**
 * A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
 * @see https://schema.org/LegislationObject
 */
export const SCHEMA_ORG_LegislationObject = "https://schema.org/LegislationObject" as const;

/**
 * A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
 * @see https://schema.org/LegislationObject
 */
export interface SchemaOrg_LegislationObject extends SchemaOrg_Legislation, SchemaOrg_MediaObject {
    /**
     * The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act.
     * @see https://schema.org/legislationLegalValue
     */
    legislationLegalValue?: Array<SchemaOrg_LegalValueLevel>;
}
