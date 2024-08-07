// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWorkSeason } from "labs/SchemaOrg_CreativeWorkSeason.ts";
import type { SchemaOrg_CreativeWorkSeries } from "labs/SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_Episode } from "labs/SchemaOrg_Episode.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_MusicGroup } from "labs/SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";
import type { SchemaOrg_VideoObject } from "labs/SchemaOrg_VideoObject.ts";

/**
 * CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 * @see https://schema.org/RadioSeries
 */
export const SCHEMA_ORG_RadioSeries = "https://schema.org/RadioSeries" as const;

/**
 * CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 * @see https://schema.org/RadioSeries
 */
export interface SchemaOrg_RadioSeries extends SchemaOrg_CreativeWorkSeries {
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
     * A season that is part of the media series.
     * @see https://schema.org/containsSeason
     */
    containsSeason: Array<SchemaOrg_CreativeWorkSeason>;
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
     * The composer of the soundtrack.
     * @see https://schema.org/musicBy
     */
    musicBy: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
    /**
     * The number of episodes in this season or series.
     * @see https://schema.org/numberOfEpisodes
     */
    numberOfEpisodes: Array<SchemaOrg_Integer>;
    /**
     * The number of seasons in this series.
     * @see https://schema.org/numberOfSeasons
     */
    numberOfSeasons: Array<SchemaOrg_Integer>;
    /**
     * The production company or studio responsible for the item, e.g. series, video game, episode etc.
     * @see https://schema.org/productionCompany
     */
    productionCompany: Array<SchemaOrg_Organization>;
    /**
     * A season in a media series.
     * @see https://schema.org/season
     */
    season: Array<SchemaOrg_CreativeWorkSeason | SchemaOrg_URL>;
    /**
     * A season in a media series.
     * @see https://schema.org/seasons
     */
    seasons: Array<SchemaOrg_CreativeWorkSeason>;
    /**
     * The trailer of a movie or TV/radio series, season, episode, etc.
     * @see https://schema.org/trailer
     */
    trailer: Array<SchemaOrg_VideoObject>;
}
