// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BlogPosting } from "labs/SchemaOrg_BlogPosting.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";

/**
 * A [[LiveBlogPosting]] is a [[BlogPosting]] intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 * @see https://schema.org/LiveBlogPosting
 */
export const SCHEMA_ORG_LiveBlogPosting = "https://schema.org/LiveBlogPosting" as const;

/**
 * A [[LiveBlogPosting]] is a [[BlogPosting]] intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 * @see https://schema.org/LiveBlogPosting
 */
export interface SchemaOrg_LiveBlogPosting extends SchemaOrg_BlogPosting {
    /**
     * The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.
     * @see https://schema.org/coverageEndTime
     */
    coverageEndTime: Array<SchemaOrg_DateTime>;
    /**
     * The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.
     * @see https://schema.org/coverageStartTime
     */
    coverageStartTime: Array<SchemaOrg_DateTime>;
    /**
     * An update to the LiveBlog.
     * @see https://schema.org/liveBlogUpdate
     */
    liveBlogUpdate: Array<SchemaOrg_BlogPosting>;
}
