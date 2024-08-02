// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMediaObject } from "./MediaObject.ts";

/** A video file. */
export interface ClassVideoObject extends ClassMediaObject {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]]. */
  caption: Array<string | { "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'. */
  embeddedTextCaption: Array<string>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object. */
  transcript: Array<string>;
  /** The frame size of the video. */
  videoFrameSize: Array<string>;
  /** The quality of the video. */
  videoQuality: Array<string>;
}
