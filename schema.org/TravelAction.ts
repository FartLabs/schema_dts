// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMoveAction } from "./MoveAction.ts";

/** The act of traveling from a fromLocation to a destination by a specified mode of transport, optionally with participants. */
export interface ClassTravelAction extends ClassMoveAction {
  /** The distance travelled, e.g. exercising or travelling. */
  distance: Array<{ "@id": string }>;
}
