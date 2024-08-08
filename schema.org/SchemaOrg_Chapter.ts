// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * One of the sections into which a book is divided. A chapter usually has a section number or a name.
 * @see https://schema.org/Chapter
 */
export const SCHEMA_ORG_Chapter = "https://schema.org/Chapter" as const;

/**
 * One of the sections into which a book is divided. A chapter usually has a section number or a name.
 * @see https://schema.org/Chapter
 */
export interface SchemaOrg_Chapter extends SchemaOrg_CreativeWork {
    /**
     * The page on which the work ends; for example "138" or "xvi".
     * @see https://schema.org/pageEnd
     */
    pageEnd?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * The page on which the work starts; for example "135" or "xiii".
     * @see https://schema.org/pageStart
     */
    pageStart?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
     * @see https://schema.org/pagination
     */
    pagination?: Array<SchemaOrg_Text>;
}
