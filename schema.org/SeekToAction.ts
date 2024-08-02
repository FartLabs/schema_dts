// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure. */
export interface ClassSeekToAction extends ClassAction {
  /** The start time of the clip expressed as the number of seconds from the beginning of the work. */
  startOffset: Array<number | { "@id": string }>;
}
