// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAnatomicalStructure } from "./AnatomicalStructure.ts";

/** A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement. */
export interface ClassMuscle extends ClassAnatomicalStructure {
  /** The muscle whose action counteracts the specified muscle. */
  antagonist: Array<{ "@id": string }>;
  /** The blood vessel that carries blood from the heart to the muscle. */
  bloodSupply: Array<{ "@id": string }>;
  /** The place of attachment of a muscle, or what the muscle moves. */
  insertion: Array<{ "@id": string }>;
  /** The movement the muscle generates. */
  muscleAction: Array<string>;
  /** The underlying innervation associated with the muscle. */
  nerve: Array<{ "@id": string }>;
}
