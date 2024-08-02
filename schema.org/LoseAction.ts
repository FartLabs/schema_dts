// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAchieveAction } from "./AchieveAction.ts";

/** The act of being defeated in a competitive activity. */
export interface ClassLoseAction extends ClassAchieveAction {
  /** A sub property of participant. The winner of the action. */
  winner: Array<{ "@id": string }>;
}
