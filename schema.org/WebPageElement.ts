// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A web page element, like a table or an image. */
export interface ClassWebPageElement extends ClassCreativeWork {
  /** A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
  cssSelector: Array<{ "@id": string }>;
  /** An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element". */
  xpath: Array<{ "@id": string }>;
}
