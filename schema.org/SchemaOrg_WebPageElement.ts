// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CssSelectorType } from "./SchemaOrg_CssSelectorType.ts";
import type { SchemaOrg_XPathType } from "./SchemaOrg_XPathType.ts";

/**
 * A web page element, like a table or an image.
 * @see https://schema.org/WebPageElement
 */
export const SCHEMA_ORG_WebPageElement = "https://schema.org/WebPageElement" as const;

/**
 * A web page element, like a table or an image.
 * @see https://schema.org/WebPageElement
 */
export interface SchemaOrg_WebPageElement extends SchemaOrg_CreativeWork {
    /**
     * A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
     * @see https://schema.org/cssSelector
     */
    cssSelector?: Array<SchemaOrg_CssSelectorType>;
    /**
     * An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
     * @see https://schema.org/xpath
     */
    xpath?: Array<SchemaOrg_XPathType>;
}
