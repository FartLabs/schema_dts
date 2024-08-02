// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object. */
export interface ClassMoveAction extends ClassAction {
  /** A sub property of location. The original location of the object or the agent before the action. */
  fromLocation: Array<{ "@id": string }>;
  /** A sub property of location. The final location of the object or the agent after the action. */
  toLocation: Array<{ "@id": string }>;
}
