// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CreativeWorkSeason } from "./SchemaOrg_CreativeWorkSeason.ts";
import type { SchemaOrg_CreativeWorkSeries } from "./SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_Episode } from "./SchemaOrg_Episode.ts";
import type { SchemaOrg_HyperTocEntry } from "./SchemaOrg_HyperTocEntry.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_MusicGroup } from "./SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A short TV or radio program or a segment/part of a program.
 * @see https://schema.org/Clip
 */
export const SCHEMA_ORG_Clip = "https://schema.org/Clip" as const;

/**
 * A short TV or radio program or a segment/part of a program.
 * @see https://schema.org/Clip
 */
export interface SchemaOrg_Clip extends SchemaOrg_CreativeWork {
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
     * Position of the clip within an ordered group of clips.
     * @see https://schema.org/clipNumber
     */
    clipNumber?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
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
     * The end time of the clip expressed as the number of seconds from the beginning of the work.
     * @see https://schema.org/endOffset
     */
    endOffset?: Array<SchemaOrg_Number | SchemaOrg_HyperTocEntry>;
    /**
     * The composer of the soundtrack.
     * @see https://schema.org/musicBy
     */
    musicBy?: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
    /**
     * The episode to which this clip belongs.
     * @see https://schema.org/partOfEpisode
     */
    partOfEpisode?: Array<SchemaOrg_Episode>;
    /**
     * The season to which this episode belongs.
     * @see https://schema.org/partOfSeason
     */
    partOfSeason?: Array<SchemaOrg_CreativeWorkSeason>;
    /**
     * The series to which this episode or season belongs.
     * @see https://schema.org/partOfSeries
     */
    partOfSeries?: Array<SchemaOrg_CreativeWorkSeries>;
    /**
     * The start time of the clip expressed as the number of seconds from the beginning of the work.
     * @see https://schema.org/startOffset
     */
    startOffset?: Array<SchemaOrg_Number | SchemaOrg_HyperTocEntry>;
}
