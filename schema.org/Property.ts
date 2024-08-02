// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property. */
export interface ClassProperty extends ClassIntangible {
  /** Relates a property to a class that is (one of) the type(s) the property is expected to be used on. */
  domainIncludes: Array<{ "@id": string }>;
  /** Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used. */
  inverseOf: Array<{ "@id": string }>;
  /** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property. */
  rangeIncludes: Array<{ "@id": string }>;
  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
  supersededBy: Array<{ "@id": string }>;
}
