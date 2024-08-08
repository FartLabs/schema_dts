// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AudioObject } from "./SchemaOrg_AudioObject.ts";
import type { SchemaOrg_Book } from "./SchemaOrg_Book.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * An audiobook.
 * @see https://schema.org/Audiobook
 */
export const SCHEMA_ORG_Audiobook = "https://schema.org/Audiobook" as const;

/**
 * An audiobook.
 * @see https://schema.org/Audiobook
 */
export interface SchemaOrg_Audiobook extends SchemaOrg_Book, SchemaOrg_AudioObject {
    /**
     * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/duration
     */
    duration?: Array<SchemaOrg_Duration>;
    /**
     * A person who reads (performs) the audiobook.
     * @see https://schema.org/readBy
     */
    readBy?: Array<SchemaOrg_Person>;
}
