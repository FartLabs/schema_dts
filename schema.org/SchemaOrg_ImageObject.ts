// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_MediaObject } from "labs/SchemaOrg_MediaObject.ts";
import type { SchemaOrg_PropertyValue } from "labs/SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * An image file.
 * @see https://schema.org/ImageObject
 */
export const SCHEMA_ORG_ImageObject = "https://schema.org/ImageObject" as const;

/**
 * An image file.
 * @see https://schema.org/ImageObject
 */
export interface SchemaOrg_ImageObject extends SchemaOrg_MediaObject {
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
     * exif data for this object.
     * @see https://schema.org/exifData
     */
    exifData: Array<SchemaOrg_PropertyValue | SchemaOrg_Text>;
    /**
     * Indicates whether this image is representative of the content of the page.
     * @see https://schema.org/representativeOfPage
     */
    representativeOfPage: Array<SchemaOrg_Boolean>;
}
