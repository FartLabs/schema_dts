// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAddAction } from "./AddAction.ts";

/** The act of adding at a specific location in an ordered collection. */
export interface ClassInsertAction extends ClassAddAction {
  /** A sub property of location. The final location of the object or the agent after the action. */
  toLocation: Array<{ "@id": string }>;
}
