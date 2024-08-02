// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMediaObject } from "./MediaObject.ts";

/** An audio file. */
export interface ClassAudioObject extends ClassMediaObject {
  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]]. */
  caption: Array<string | { "@id": string }>;
  /** Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'. */
  embeddedTextCaption: Array<string>;
  /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
  transcript: Array<string>;
}
