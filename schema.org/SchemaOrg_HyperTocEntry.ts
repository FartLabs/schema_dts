// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_HyperTocEntry } from "labs/SchemaOrg_HyperTocEntry.ts";
import type { SchemaOrg_MediaObject } from "labs/SchemaOrg_MediaObject.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]].
 * @see https://schema.org/HyperTocEntry
 */
export const SCHEMA_ORG_HyperTocEntry = "https://schema.org/HyperTocEntry" as const;

/**
 * A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]].
 * @see https://schema.org/HyperTocEntry
 */
export interface SchemaOrg_HyperTocEntry extends SchemaOrg_CreativeWork {
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for encoding.
     * @see https://schema.org/associatedMedia
     */
    associatedMedia: Array<SchemaOrg_MediaObject>;
    /**
     * A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render.
     * @see https://schema.org/tocContinuation
     */
    tocContinuation: Array<SchemaOrg_HyperTocEntry>;
    /**
     * Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]].
     * @see https://schema.org/utterances
     */
    utterances: Array<SchemaOrg_Text>;
}
