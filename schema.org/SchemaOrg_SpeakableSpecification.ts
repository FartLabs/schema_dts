// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CssSelectorType } from "./SchemaOrg_CssSelectorType.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_XPathType } from "./SchemaOrg_XPathType.ts";

/**
 * A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
 * @see https://schema.org/SpeakableSpecification
 */
export const SCHEMA_ORG_SpeakableSpecification =
  "https://schema.org/SpeakableSpecification" as const;

/**
 * A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
 * @see https://schema.org/SpeakableSpecification
 */
export interface SchemaOrg_SpeakableSpecification extends SchemaOrg_Intangible {
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
