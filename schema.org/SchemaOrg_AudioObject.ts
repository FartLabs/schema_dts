// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MediaObject } from "labs/SchemaOrg_MediaObject.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * An audio file.
 * @see https://schema.org/AudioObject
 */
export const SCHEMA_ORG_AudioObject = "https://schema.org/AudioObject" as const;

/**
 * An audio file.
 * @see https://schema.org/AudioObject
 */
export interface SchemaOrg_AudioObject extends SchemaOrg_MediaObject {
    /**
     * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
     * @see https://schema.org/caption
     */
    caption: Array<SchemaOrg_MediaObject | SchemaOrg_Text>;
    /**
     * Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.
     * @see https://schema.org/embeddedTextCaption
     */
    embeddedTextCaption: Array<SchemaOrg_Text>;
    /**
     * If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
     * @see https://schema.org/transcript
     */
    transcript: Array<SchemaOrg_Text>;
}
