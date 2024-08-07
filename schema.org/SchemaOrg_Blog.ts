// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BlogPosting } from "labs/SchemaOrg_BlogPosting.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A [blog](https://en.wikipedia.org/wiki/Blog), sometimes known as a "weblog". Note that the individual posts ([[BlogPosting]]s) in a [[Blog]] are often colloquially referred to by the same term.
 * @see https://schema.org/Blog
 */
export const SCHEMA_ORG_Blog = "https://schema.org/Blog" as const;

/**
 * A [blog](https://en.wikipedia.org/wiki/Blog), sometimes known as a "weblog". Note that the individual posts ([[BlogPosting]]s) in a [[Blog]] are often colloquially referred to by the same term.
 * @see https://schema.org/Blog
 */
export interface SchemaOrg_Blog extends SchemaOrg_CreativeWork {
    /**
     * A posting that is part of this blog.
     * @see https://schema.org/blogPost
     */
    blogPost: Array<SchemaOrg_BlogPosting>;
    /**
     * Indicates a post that is part of a [[Blog]]. Note that historically, what we term a "Blog" was once known as a "weblog", and that what we term a "BlogPosting" is now often colloquially referred to as a "blog".
     * @see https://schema.org/blogPosts
     */
    blogPosts: Array<SchemaOrg_BlogPosting>;
    /**
     * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
     * @see https://schema.org/issn
     */
    issn: Array<SchemaOrg_Text>;
}
