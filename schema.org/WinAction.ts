// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAchieveAction } from "./AchieveAction.ts";

/** The act of achieving victory in a competitive activity. */
export interface ClassWinAction extends ClassAchieveAction {
  /** A sub property of participant. The loser of the action. */
  loser: Array<{ "@id": string }>;
}
