// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWorkSeries } from "./CreativeWorkSeries.ts";

/** A podcast is an episodic series of digital audio or video files which a user can download and listen to. */
export interface ClassPodcastSeries extends ClassCreativeWorkSeries {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom. */
  webFeed: Array<{ "@id": string }>;
}
