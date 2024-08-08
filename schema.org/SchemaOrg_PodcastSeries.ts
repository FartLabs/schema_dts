// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWorkSeries } from "./SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_DataFeed } from "./SchemaOrg_DataFeed.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 * @see https://schema.org/PodcastSeries
 */
export const SCHEMA_ORG_PodcastSeries = "https://schema.org/PodcastSeries" as const;

/**
 * A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 * @see https://schema.org/PodcastSeries
 */
export interface SchemaOrg_PodcastSeries extends SchemaOrg_CreativeWorkSeries {
    /**
     * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     * @see https://schema.org/actor
     */
    actor?: Array<SchemaOrg_Person>;
    /**
     * The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom.
     * @see https://schema.org/webFeed
     */
    webFeed?: Array<SchemaOrg_URL | SchemaOrg_DataFeed>;
}
