// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassConsumeAction } from "./ConsumeAction.ts";

/** The act of playing a video game. */
export interface ClassPlayGameAction extends ClassConsumeAction {
  /** Indicates the availability type of the game content associated with this action, such as whether it is a full version or a demo. */
  gameAvailabilityType: Array<string | { "@id": string }>;
}
