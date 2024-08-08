// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_PublicationEvent } from "./SchemaOrg_PublicationEvent.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An over the air or online broadcast event.
 * @see https://schema.org/BroadcastEvent
 */
export const SCHEMA_ORG_BroadcastEvent =
  "https://schema.org/BroadcastEvent" as const;

/**
 * An over the air or online broadcast event.
 * @see https://schema.org/BroadcastEvent
 */
export interface SchemaOrg_BroadcastEvent extends SchemaOrg_PublicationEvent {
  /**
   * The event being broadcast such as a sporting event or awards ceremony.
   * @see https://schema.org/broadcastOfEvent
   */
  broadcastOfEvent?: Array<SchemaOrg_Event>;
  /**
   * True if the broadcast is of a live event.
   * @see https://schema.org/isLiveBroadcast
   */
  isLiveBroadcast?: Array<SchemaOrg_Boolean>;
  /**
   * Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
   * @see https://schema.org/subtitleLanguage
   */
  subtitleLanguage?: Array<SchemaOrg_Language | SchemaOrg_Text>;
  /**
   * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
   * @see https://schema.org/videoFormat
   */
  videoFormat?: Array<SchemaOrg_Text>;
}
