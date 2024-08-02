// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassBlogPosting } from "./BlogPosting.ts";

/** A [[LiveBlogPosting]] is a [[BlogPosting]] intended to provide a rolling textual coverage of an ongoing event through continuous updates. */
export interface ClassLiveBlogPosting extends ClassBlogPosting {
  /** The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes. */
  coverageEndTime: Array<string>;
  /** The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins. */
  coverageStartTime: Array<string>;
  /** An update to the LiveBlog. */
  liveBlogUpdate: Array<{ "@id": string }>;
}
