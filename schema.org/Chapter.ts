// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** One of the sections into which a book is divided. A chapter usually has a section number or a name. */
export interface ClassChapter extends ClassCreativeWork {
  /** The page on which the work ends; for example "138" or "xvi". */
  pageEnd: Array<string | { "@id": string }>;
  /** The page on which the work starts; for example "135" or "xiii". */
  pageStart: Array<string | { "@id": string }>;
  /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
  pagination: Array<string>;
}
