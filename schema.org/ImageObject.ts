// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMediaObject } from "./MediaObject.ts";

/** An image file. */
export interface ClassImageObject extends ClassMediaObject {
  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]]. */
  caption: Array<string | { "@id": string }>;
  /** Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'. */
  embeddedTextCaption: Array<string>;
  /** exif data for this object. */
  exifData: Array<string | { "@id": string }>;
  /** Indicates whether this image is representative of the content of the page. */
  representativeOfPage: Array<boolean>;
}
