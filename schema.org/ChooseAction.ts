// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAssessAction } from "./AssessAction.ts";

/** The act of expressing a preference from a set of options or a large or unbounded set of choices/options. */
export interface ClassChooseAction extends ClassAssessAction {
  /** A sub property of object. The options subject to this action. */
  actionOption: Array<string | { "@id": string }>;
  /** A sub property of object. The options subject to this action. */
  option: Array<string | { "@id": string }>;
}
