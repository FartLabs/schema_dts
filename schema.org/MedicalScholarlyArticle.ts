// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassScholarlyArticle } from "./ScholarlyArticle.ts";

/** A scholarly article in the medical domain. */
export interface ClassMedicalScholarlyArticle extends ClassScholarlyArticle {
  /** The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html). */
  publicationType: Array<string>;
}
