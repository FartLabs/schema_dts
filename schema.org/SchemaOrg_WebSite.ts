// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 * @see https://schema.org/WebSite
 */
export const SCHEMA_ORG_WebSite = "https://schema.org/WebSite" as const;

/**
 * A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 * @see https://schema.org/WebSite
 */
export interface SchemaOrg_WebSite extends SchemaOrg_CreativeWork {
    /**
     * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
     * @see https://schema.org/issn
     */
    issn: Array<SchemaOrg_Text>;
}
