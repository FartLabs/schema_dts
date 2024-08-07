// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_HyperTocEntry } from "labs/SchemaOrg_HyperTocEntry.ts";
import type { SchemaOrg_MediaObject } from "labs/SchemaOrg_MediaObject.ts";

/**
 * A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items.
 * @see https://schema.org/HyperToc
 */
export const SCHEMA_ORG_HyperToc = "https://schema.org/HyperToc" as const;

/**
 * A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items.
 * @see https://schema.org/HyperToc
 */
export interface SchemaOrg_HyperToc extends SchemaOrg_CreativeWork {
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for encoding.
     * @see https://schema.org/associatedMedia
     */
    associatedMedia: Array<SchemaOrg_MediaObject>;
    /**
     * Indicates a [[HyperTocEntry]] in a [[HyperToc]].
     * @see https://schema.org/tocEntry
     */
    tocEntry: Array<SchemaOrg_HyperTocEntry>;
}
