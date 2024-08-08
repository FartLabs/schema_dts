// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCodeSet } from "./SchemaOrg_CategoryCodeSet.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A Category Code.
 * @see https://schema.org/CategoryCode
 */
export const SCHEMA_ORG_CategoryCode =
  "https://schema.org/CategoryCode" as const;

/**
 * A Category Code.
 * @see https://schema.org/CategoryCode
 */
export interface SchemaOrg_CategoryCode extends SchemaOrg_DefinedTerm {
  /**
   * A short textual code that uniquely identifies the value.
   * @see https://schema.org/codeValue
   */
  codeValue?: Array<SchemaOrg_Text>;
  /**
   * A [[CategoryCodeSet]] that contains this category code.
   * @see https://schema.org/inCodeSet
   */
  inCodeSet?: Array<SchemaOrg_URL | SchemaOrg_CategoryCodeSet>;
}
