// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DefinedTerm } from "labs/SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_PropertyValue } from "labs/SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_Taxon } from "labs/SchemaOrg_Taxon.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A set of organisms asserted to represent a natural cohesive biological unit.
 * @see https://schema.org/Taxon
 */
export const SCHEMA_ORG_Taxon = "https://schema.org/Taxon" as const;

/**
 * A set of organisms asserted to represent a natural cohesive biological unit.
 * @see https://schema.org/Taxon
 */
export interface SchemaOrg_Taxon extends SchemaOrg_Thing {
    /**
     * Closest child taxa of the taxon in question.
     * @see https://schema.org/childTaxon
     */
    childTaxon: Array<SchemaOrg_Text | SchemaOrg_Taxon | SchemaOrg_URL>;
    /**
     * A Defined Term contained in this term set.
     * @see https://schema.org/hasDefinedTerm
     */
    hasDefinedTerm: Array<SchemaOrg_DefinedTerm>;
    /**
     * Closest parent taxon of the taxon in question.
     * @see https://schema.org/parentTaxon
     */
    parentTaxon: Array<SchemaOrg_Taxon | SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary – typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs.
     * @see https://schema.org/taxonRank
     */
    taxonRank: Array<SchemaOrg_Text | SchemaOrg_PropertyValue | SchemaOrg_URL>;
}
