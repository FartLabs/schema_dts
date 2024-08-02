// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks. */
export interface ClassComment extends ClassCreativeWork {
  /** The number of downvotes this question, answer or comment has received from the community. */
  downvoteCount: Array<{ "@id": string }>;
  /** The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it. */
  parentItem: Array<{ "@id": string }>;
  /** A CreativeWork such as an image, video, or audio clip shared as part of this posting. */
  sharedContent: Array<{ "@id": string }>;
  /** The number of upvotes this question, answer or comment has received from the community. */
  upvoteCount: Array<{ "@id": string }>;
}
