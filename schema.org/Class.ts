// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A class, also often called a 'Type'; equivalent to rdfs:Class. */
export interface ClassClass extends ClassIntangible {
  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it. */
  supersededBy: Array<{ "@id": string }>;
}
