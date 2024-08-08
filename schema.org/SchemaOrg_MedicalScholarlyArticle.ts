// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ScholarlyArticle } from "./SchemaOrg_ScholarlyArticle.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A scholarly article in the medical domain.
 * @see https://schema.org/MedicalScholarlyArticle
 */
export const SCHEMA_ORG_MedicalScholarlyArticle = "https://schema.org/MedicalScholarlyArticle" as const;

/**
 * A scholarly article in the medical domain.
 * @see https://schema.org/MedicalScholarlyArticle
 */
export interface SchemaOrg_MedicalScholarlyArticle extends SchemaOrg_ScholarlyArticle {
    /**
     * The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html).
     * @see https://schema.org/publicationType
     */
    publicationType?: Array<SchemaOrg_Text>;
}
