// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The act of managing by changing/editing the state of the object. */
export interface ClassUpdateAction extends ClassAction {
  /** A sub property of object. The collection target of the action. */
  collection: Array<{ "@id": string }>;
  /** A sub property of object. The collection target of the action. */
  targetCollection: Array<{ "@id": string }>;
}
