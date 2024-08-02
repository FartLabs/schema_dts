// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassListItem } from "./ListItem.ts";
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A direction indicating a single action to do in the instructions for how to achieve a result. */
export interface ClassHowToDirection extends ClassListItem, ClassCreativeWork {
  /** A media object representing the circumstances after performing this direction. */
  afterMedia: Array<{ "@id": string }>;
  /** A media object representing the circumstances before performing this direction. */
  beforeMedia: Array<{ "@id": string }>;
  /** A media object representing the circumstances while performing this direction. */
  duringMedia: Array<{ "@id": string }>;
  /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  performTime: Array<{ "@id": string }>;
  /** The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  prepTime: Array<{ "@id": string }>;
  /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
  supply: Array<string | { "@id": string }>;
  /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
  tool: Array<string | { "@id": string }>;
  /** The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  totalTime: Array<{ "@id": string }>;
}
