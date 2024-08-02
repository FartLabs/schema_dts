// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term. */
export interface ClassDefinedTerm extends ClassIntangible {
  /** A [[DefinedTermSet]] that contains this term. */
  inDefinedTermSet: Array<{ "@id": string }>;
  /** A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]]. */
  termCode: Array<string>;
}
