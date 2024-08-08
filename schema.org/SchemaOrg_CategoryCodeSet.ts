// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_DefinedTermSet } from "./SchemaOrg_DefinedTermSet.ts";

/**
 * A set of Category Code values.
 * @see https://schema.org/CategoryCodeSet
 */
export const SCHEMA_ORG_CategoryCodeSet = "https://schema.org/CategoryCodeSet" as const;

/**
 * A set of Category Code values.
 * @see https://schema.org/CategoryCodeSet
 */
export interface SchemaOrg_CategoryCodeSet extends SchemaOrg_DefinedTermSet {
    /**
     * A Category code contained in this code set.
     * @see https://schema.org/hasCategoryCode
     */
    hasCategoryCode?: Array<SchemaOrg_CategoryCode>;
}
