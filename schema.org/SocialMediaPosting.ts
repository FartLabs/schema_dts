// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassArticle } from "./Article.ts";

/** A post to a social media platform, including blog posts, tweets, Facebook posts, etc. */
export interface ClassSocialMediaPosting extends ClassArticle {
  /** A CreativeWork such as an image, video, or audio clip shared as part of this posting. */
  sharedContent: Array<{ "@id": string }>;
}
