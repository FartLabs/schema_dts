// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Comment } from "./SchemaOrg_Comment.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";

/**
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 * @see https://schema.org/Comment
 */
export const SCHEMA_ORG_Comment = "https://schema.org/Comment" as const;

/**
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 * @see https://schema.org/Comment
 */
export interface SchemaOrg_Comment extends SchemaOrg_CreativeWork {
  /**
   * The number of downvotes this question, answer or comment has received from the community.
   * @see https://schema.org/downvoteCount
   */
  downvoteCount?: Array<SchemaOrg_Integer>;
  /**
   * The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.
   * @see https://schema.org/parentItem
   */
  parentItem?: Array<SchemaOrg_CreativeWork | SchemaOrg_Comment>;
  /**
   * A CreativeWork such as an image, video, or audio clip shared as part of this posting.
   * @see https://schema.org/sharedContent
   */
  sharedContent?: Array<SchemaOrg_CreativeWork>;
  /**
   * The number of upvotes this question, answer or comment has received from the community.
   * @see https://schema.org/upvoteCount
   */
  upvoteCount?: Array<SchemaOrg_Integer>;
}
