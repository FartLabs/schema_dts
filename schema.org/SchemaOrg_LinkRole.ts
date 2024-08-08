// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Role } from "./SchemaOrg_Role.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A Role that represents a Web link, e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types, e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds.
 * @see https://schema.org/LinkRole
 */
export const SCHEMA_ORG_LinkRole = "https://schema.org/LinkRole" as const;

/**
 * A Role that represents a Web link, e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types, e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds.
 * @see https://schema.org/LinkRole
 */
export interface SchemaOrg_LinkRole extends SchemaOrg_Role {
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     * @see https://schema.org/inLanguage
     */
    inLanguage?: Array<SchemaOrg_Language | SchemaOrg_Text>;
    /**
     * Indicates the relationship type of a Web link.
     * @see https://schema.org/linkRelationship
     */
    linkRelationship?: Array<SchemaOrg_Text>;
}
