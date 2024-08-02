// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Lists or enumerations—for example, a list of cuisines or music genres, etc. */
export interface ClassEnumeration extends ClassIntangible {
  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
  supersededBy: Array<{ "@id": string }>;
}
