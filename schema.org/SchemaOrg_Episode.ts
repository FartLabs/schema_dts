// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CreativeWorkSeason } from "labs/SchemaOrg_CreativeWorkSeason.ts";
import type { SchemaOrg_CreativeWorkSeries } from "labs/SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_MusicGroup } from "labs/SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_VideoObject } from "labs/SchemaOrg_VideoObject.ts";

/**
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 * @see https://schema.org/Episode
 */
export const SCHEMA_ORG_Episode = "https://schema.org/Episode" as const;

/**
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 * @see https://schema.org/Episode
 */
export interface SchemaOrg_Episode extends SchemaOrg_CreativeWork {
    /**
     * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/actor
     */
    actor: Array<SchemaOrg_Person>;
    /**
     * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/actors
     */
    actors: Array<SchemaOrg_Person>;
    /**
     * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/director
     */
    director: Array<SchemaOrg_Person>;
    /**
     * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/directors
     */
    directors: Array<SchemaOrg_Person>;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/duration
     */
    duration: Array<SchemaOrg_Duration>;
    /**
     * Position of the episode within an ordered group of episodes.
     * @see https://schema.org/episodeNumber
     */
    episodeNumber: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * The composer of the soundtrack.
     * @see https://schema.org/musicBy
     */
    musicBy: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
    /**
     * The season to which this episode belongs.
     * @see https://schema.org/partOfSeason
     */
    partOfSeason: Array<SchemaOrg_CreativeWorkSeason>;
    /**
     * The series to which this episode or season belongs.
     * @see https://schema.org/partOfSeries
     */
    partOfSeries: Array<SchemaOrg_CreativeWorkSeries>;
    /**
     * The production company or studio responsible for the item, e.g. series, video game, episode etc.
     * @see https://schema.org/productionCompany
     */
    productionCompany: Array<SchemaOrg_Organization>;
    /**
     * The trailer of a movie or TV/radio series, season, episode, etc.
     * @see https://schema.org/trailer
     */
    trailer: Array<SchemaOrg_VideoObject>;
}
