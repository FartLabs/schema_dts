// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * @see https://schema.org/PublicationIssue
 */
export const SCHEMA_ORG_PublicationIssue =
  "https://schema.org/PublicationIssue" as const;

/**
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 * @see https://schema.org/PublicationIssue
 */
export interface SchemaOrg_PublicationIssue extends SchemaOrg_CreativeWork {
  /**
   * Identifies the issue of publication; for example, "iii" or "2".
   * @see https://schema.org/issueNumber
   */
  issueNumber?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
  /**
   * The page on which the work ends; for example "138" or "xvi".
   * @see https://schema.org/pageEnd
   */
  pageEnd?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
  /**
   * The page on which the work starts; for example "135" or "xiii".
   * @see https://schema.org/pageStart
   */
  pageStart?: Array<SchemaOrg_Text | SchemaOrg_Integer>;
  /**
   * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
   * @see https://schema.org/pagination
   */
  pagination?: Array<SchemaOrg_Text>;
}
