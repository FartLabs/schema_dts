// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWorkSeries } from "labs/SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_MusicGroup } from "labs/SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_VideoObject } from "labs/SchemaOrg_VideoObject.ts";

/**
 * A series of movies. Included movies can be indicated with the hasPart property.
 * @see https://schema.org/MovieSeries
 */
export const SCHEMA_ORG_MovieSeries = "https://schema.org/MovieSeries" as const;

/**
 * A series of movies. Included movies can be indicated with the hasPart property.
 * @see https://schema.org/MovieSeries
 */
export interface SchemaOrg_MovieSeries extends SchemaOrg_CreativeWorkSeries {
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
     * The composer of the soundtrack.
     * @see https://schema.org/musicBy
     */
    musicBy: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
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
