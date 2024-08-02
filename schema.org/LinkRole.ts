// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassRole } from "./Role.ts";

/** A Role that represents a Web link, e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types, e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds. */
export interface ClassLinkRole extends ClassRole {
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: Array<string | { "@id": string }>;
  /** Indicates the relationship type of a Web link. */
  linkRelationship: Array<string>;
}
