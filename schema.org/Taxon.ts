// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** A set of organisms asserted to represent a natural cohesive biological unit. */
export interface ClassTaxon extends ClassThing {
  /** Closest child taxa of the taxon in question. */
  childTaxon: Array<string | { "@id": string }>;
  /** A Defined Term contained in this term set. */
  hasDefinedTerm: Array<{ "@id": string }>;
  /** Closest parent taxon of the taxon in question. */
  parentTaxon: Array<string | { "@id": string }>;
  /** The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary – typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs. */
  taxonRank: Array<string | { "@id": string }>;
}
