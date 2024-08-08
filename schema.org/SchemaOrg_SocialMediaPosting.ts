// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Article } from "./SchemaOrg_Article.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";

/**
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 * @see https://schema.org/SocialMediaPosting
 */
export const SCHEMA_ORG_SocialMediaPosting =
  "https://schema.org/SocialMediaPosting" as const;

/**
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 * @see https://schema.org/SocialMediaPosting
 */
export interface SchemaOrg_SocialMediaPosting extends SchemaOrg_Article {
  /**
   * A CreativeWork such as an image, video, or audio clip shared as part of this posting.
   * @see https://schema.org/sharedContent
   */
  sharedContent?: Array<SchemaOrg_CreativeWork>;
}
