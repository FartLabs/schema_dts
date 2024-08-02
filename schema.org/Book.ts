// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A book. */
export interface ClassBook extends ClassCreativeWork {
  /** Indicates whether the book is an abridged edition. */
  abridged: Array<boolean>;
  /** The edition of the book. */
  bookEdition: Array<string>;
  /** The format of the book. */
  bookFormat: Array<{ "@id": string }>;
  /** The illustrator of the book. */
  illustrator: Array<{ "@id": string }>;
  /** The ISBN of the book. */
  isbn: Array<string>;
  /** The number of pages in the book. */
  numberOfPages: Array<{ "@id": string }>;
}
