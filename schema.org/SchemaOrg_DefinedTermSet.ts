// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";

/**
 * A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 * @see https://schema.org/DefinedTermSet
 */
export const SCHEMA_ORG_DefinedTermSet = "https://schema.org/DefinedTermSet" as const;

/**
 * A set of defined terms, for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 * @see https://schema.org/DefinedTermSet
 */
export interface SchemaOrg_DefinedTermSet extends SchemaOrg_CreativeWork {
    /**
     * A Defined Term contained in this term set.
     * @see https://schema.org/hasDefinedTerm
     */
    hasDefinedTerm?: Array<SchemaOrg_DefinedTerm>;
}
