// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DefinedTermSet } from "./SchemaOrg_DefinedTermSet.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.
 * @see https://schema.org/DefinedTerm
 */
export const SCHEMA_ORG_DefinedTerm = "https://schema.org/DefinedTerm" as const;

/**
 * A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.
 * @see https://schema.org/DefinedTerm
 */
export interface SchemaOrg_DefinedTerm extends SchemaOrg_Intangible {
    /**
     * A [[DefinedTermSet]] that contains this term.
     * @see https://schema.org/inDefinedTermSet
     */
    inDefinedTermSet?: Array<SchemaOrg_DefinedTermSet | SchemaOrg_URL>;
    /**
     * A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]].
     * @see https://schema.org/termCode
     */
    termCode?: Array<SchemaOrg_Text>;
}
