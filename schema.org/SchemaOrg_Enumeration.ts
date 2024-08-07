// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Class } from "labs/SchemaOrg_Class.ts";
import type { SchemaOrg_Enumeration } from "labs/SchemaOrg_Enumeration.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Property } from "labs/SchemaOrg_Property.ts";

/**
 * Lists or enumerations—for example, a list of cuisines or music genres, etc.
 * @see https://schema.org/Enumeration
 */
export const SCHEMA_ORG_Enumeration = "https://schema.org/Enumeration" as const;

/**
 * Lists or enumerations—for example, a list of cuisines or music genres, etc.
 * @see https://schema.org/Enumeration
 */
export interface SchemaOrg_Enumeration extends SchemaOrg_Intangible {
    /**
     * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
     * @see https://schema.org/supersededBy
     */
    supersededBy: Array<SchemaOrg_Class | SchemaOrg_Enumeration | SchemaOrg_Property>;
}
