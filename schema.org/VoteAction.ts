// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassChooseAction } from "./ChooseAction.ts";

/** The act of expressing a preference from a fixed/finite/structured set of choices/options. */
export interface ClassVoteAction extends ClassChooseAction {
  /** A sub property of object. The candidate subject of this action. */
  candidate: Array<{ "@id": string }>;
}
