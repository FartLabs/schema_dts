// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_Movie } from "./SchemaOrg_Movie.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A screening of a movie or other video.
 * @see https://schema.org/ScreeningEvent
 */
export const SCHEMA_ORG_ScreeningEvent = "https://schema.org/ScreeningEvent" as const;

/**
 * A screening of a movie or other video.
 * @see https://schema.org/ScreeningEvent
 */
export interface SchemaOrg_ScreeningEvent extends SchemaOrg_Event {
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
    /**
     * The movie presented during this event.
     * @see https://schema.org/workPresented
     */
    workPresented?: Array<SchemaOrg_Movie>;
}
