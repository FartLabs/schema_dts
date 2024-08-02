// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEvent } from "./Event.ts";

/** A screening of a movie or other video. */
export interface ClassScreeningEvent extends ClassEvent {
  /** Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47). */
  subtitleLanguage: Array<string | { "@id": string }>;
  /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
  videoFormat: Array<string>;
  /** The movie presented during this event. */
  workPresented: Array<{ "@id": string }>;
}
