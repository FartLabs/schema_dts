// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html). */
export interface ClassPublicationIssue extends ClassCreativeWork {
  /** Identifies the issue of publication; for example, "iii" or "2". */
  issueNumber: Array<string | { "@id": string }>;
  /** The page on which the work ends; for example "138" or "xvi". */
  pageEnd: Array<string | { "@id": string }>;
  /** The page on which the work starts; for example "135" or "xiii". */
  pageStart: Array<string | { "@id": string }>;
  /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
  pagination: Array<string>;
}
