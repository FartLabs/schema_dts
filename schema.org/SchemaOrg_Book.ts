// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BookFormatType } from "./SchemaOrg_BookFormatType.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A book.
 * @see https://schema.org/Book
 */
export const SCHEMA_ORG_Book = "https://schema.org/Book" as const;

/**
 * A book.
 * @see https://schema.org/Book
 */
export interface SchemaOrg_Book extends SchemaOrg_CreativeWork {
    /**
     * Indicates whether the book is an abridged edition.
     * @see https://schema.org/abridged
     */
    abridged?: Array<SchemaOrg_Boolean>;
    /**
     * The edition of the book.
     * @see https://schema.org/bookEdition
     */
    bookEdition?: Array<SchemaOrg_Text>;
    /**
     * The format of the book.
     * @see https://schema.org/bookFormat
     */
    bookFormat?: Array<SchemaOrg_BookFormatType>;
    /**
     * The illustrator of the book.
     * @see https://schema.org/illustrator
     */
    illustrator?: Array<SchemaOrg_Person>;
    /**
     * The ISBN of the book.
     * @see https://schema.org/isbn
     */
    isbn?: Array<SchemaOrg_Text>;
    /**
     * The number of pages in the book.
     * @see https://schema.org/numberOfPages
     */
    numberOfPages?: Array<SchemaOrg_Integer>;
}
