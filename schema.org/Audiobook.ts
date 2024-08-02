// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassBook } from "./Book.ts";
import type { ClassAudioObject } from "./AudioObject.ts";

/** An audiobook. */
export interface ClassAudiobook extends ClassBook, ClassAudioObject {
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** A person who reads (performs) the audiobook. */
  readBy: Array<{ "@id": string }>;
}
