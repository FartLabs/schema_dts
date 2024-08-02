// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html). */
export interface ClassPublicationVolume extends ClassCreativeWork {
  /** The page on which the work ends; for example "138" or "xvi". */
  pageEnd: Array<string | { "@id": string }>;
  /** The page on which the work starts; for example "135" or "xiii". */
  pageStart: Array<string | { "@id": string }>;
  /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49". */
  pagination: Array<string>;
  /** Identifies the volume of publication or multi-part work; for example, "iii" or "2". */
  volumeNumber: Array<string | { "@id": string }>;
}
