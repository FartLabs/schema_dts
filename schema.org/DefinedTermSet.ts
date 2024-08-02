// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeration. */
export interface ClassDefinedTermSet extends ClassCreativeWork {
  /** A Defined Term contained in this term set. */
  hasDefinedTerm: Array<{ "@id": string }>;
}
