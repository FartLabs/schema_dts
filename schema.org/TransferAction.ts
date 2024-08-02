// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another. */
export interface ClassTransferAction extends ClassAction {
  /** A sub property of location. The original location of the object or the agent before the action. */
  fromLocation: Array<{ "@id": string }>;
  /** A sub property of location. The final location of the object or the agent after the action. */
  toLocation: Array<{ "@id": string }>;
}
