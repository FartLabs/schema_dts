// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassReactAction } from "./ReactAction.ts";

/** An agent approves/certifies/likes/supports/sanctions an object. */
export interface ClassEndorseAction extends ClassReactAction {
  /** A sub property of participant. The person/organization being supported. */
  endorsee: Array<{ "@id": string }>;
}
