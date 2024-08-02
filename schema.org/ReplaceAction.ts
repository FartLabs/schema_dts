// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassUpdateAction } from "./UpdateAction.ts";

/** The act of editing a recipient by replacing an old object with a new object. */
export interface ClassReplaceAction extends ClassUpdateAction {
  /** A sub property of object. The object that is being replaced. */
  replacee: Array<{ "@id": string }>;
  /** A sub property of object. The object that replaces. */
  replacer: Array<{ "@id": string }>;
}
