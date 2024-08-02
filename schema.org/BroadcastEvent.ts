// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPublicationEvent } from "./PublicationEvent.ts";

/** An over the air or online broadcast event. */
export interface ClassBroadcastEvent extends ClassPublicationEvent {
  /** The event being broadcast such as a sporting event or awards ceremony. */
  broadcastOfEvent: Array<{ "@id": string }>;
  /** True if the broadcast is of a live event. */
  isLiveBroadcast: Array<boolean>;
  /** Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47). */
  subtitleLanguage: Array<string | { "@id": string }>;
  /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.). */
  videoFormat: Array<string>;
}
