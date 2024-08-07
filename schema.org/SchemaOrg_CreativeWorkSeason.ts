// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CreativeWorkSeries } from "labs/SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Episode } from "labs/SchemaOrg_Episode.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_VideoObject } from "labs/SchemaOrg_VideoObject.ts";

/**
 * A media season, e.g. TV, radio, video game etc.
 * @see https://schema.org/CreativeWorkSeason
 */
export const SCHEMA_ORG_CreativeWorkSeason = "https://schema.org/CreativeWorkSeason" as const;

/**
 * A media season, e.g. TV, radio, video game etc.
 * @see https://schema.org/CreativeWorkSeason
 */
export interface SchemaOrg_CreativeWorkSeason extends SchemaOrg_CreativeWork {
    /**
     * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/actor
     */
    actor: Array<SchemaOrg_Person>;
    /**
     * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/director
     */
    director: Array<SchemaOrg_Person>;
    /**
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/endDate
     */
    endDate: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * An episode of a TV, radio or game media within a series or season.
     * @see https://schema.org/episode
     */
    episode: Array<SchemaOrg_Episode>;
    /**
     * An episode of a TV/radio series or season.
     * @see https://schema.org/episodes
     */
    episodes: Array<SchemaOrg_Episode>;
    /**
     * The number of episodes in this season or series.
     * @see https://schema.org/numberOfEpisodes
     */
    numberOfEpisodes: Array<SchemaOrg_Integer>;
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
     * Position of the season within an ordered group of seasons.
     * @see https://schema.org/seasonNumber
     */
    seasonNumber: Array<SchemaOrg_Text | SchemaOrg_Integer>;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/startDate
     */
    startDate: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The trailer of a movie or TV/radio series, season, episode, etc.
     * @see https://schema.org/trailer
     */
    trailer: Array<SchemaOrg_VideoObject>;
}
