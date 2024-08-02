// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items. */
export interface ClassHyperToc extends ClassCreativeWork {
  /** A media object that encodes this CreativeWork. This property is a synonym for encoding. */
  associatedMedia: Array<{ "@id": string }>;
  /** Indicates a [[HyperTocEntry]] in a [[HyperToc]]. */
  tocEntry: Array<{ "@id": string }>;
}
