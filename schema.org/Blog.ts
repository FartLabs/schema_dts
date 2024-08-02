// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A [blog](https://en.wikipedia.org/wiki/Blog), sometimes known as a "weblog". Note that the individual posts ([[BlogPosting]]s) in a [[Blog]] are often colloquially referred to by the same term. */
export interface ClassBlog extends ClassCreativeWork {
  /** A posting that is part of this blog. */
  blogPost: Array<{ "@id": string }>;
  /** Indicates a post that is part of a [[Blog]]. Note that historically, what we term a "Blog" was once known as a "weblog", and that what we term a "BlogPosting" is now often colloquially referred to as a "blog". */
  blogPosts: Array<{ "@id": string }>;
  /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication. */
  issn: Array<string>;
}
