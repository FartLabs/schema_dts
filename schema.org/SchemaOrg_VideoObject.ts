// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MediaObject } from "./SchemaOrg_MediaObject.ts";
import type { SchemaOrg_MusicGroup } from "./SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A video file.
 * @see https://schema.org/VideoObject
 */
export const SCHEMA_ORG_VideoObject = "https://schema.org/VideoObject" as const;

/**
 * A video file.
 * @see https://schema.org/VideoObject
 */
export interface SchemaOrg_VideoObject extends SchemaOrg_MediaObject {
  /**
   * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor?: Array<SchemaOrg_Person>;
  /**
   * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actors
   */
  actors?: Array<SchemaOrg_Person>;
  /**
   * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
   * @see https://schema.org/caption
   */
  caption?: Array<SchemaOrg_MediaObject | SchemaOrg_Text>;
  /**
   * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director?: Array<SchemaOrg_Person>;
  /**
   * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/directors
   */
  directors?: Array<SchemaOrg_Person>;
  /**
   * Represents textual captioning from a [[MediaObject]], e.g. text of a 'meme'.
   * @see https://schema.org/embeddedTextCaption
   */
  embeddedTextCaption?: Array<SchemaOrg_Text>;
  /**
   * The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy?: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
  /**
   * If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
   * @see https://schema.org/transcript
   */
  transcript?: Array<SchemaOrg_Text>;
  /**
   * The frame size of the video.
   * @see https://schema.org/videoFrameSize
   */
  videoFrameSize?: Array<SchemaOrg_Text>;
  /**
   * The quality of the video.
   * @see https://schema.org/videoQuality
   */
  videoQuality?: Array<SchemaOrg_Text>;
}
