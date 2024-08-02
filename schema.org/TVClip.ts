// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassClip } from "./Clip.ts";

/** A short TV program or a segment/part of a TV program. */
export interface ClassTVClip extends ClassClip {
  /** The TV series to which this episode or season belongs. */
  partOfTVSeries: Array<{ "@id": string }>;
}
