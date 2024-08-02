// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A musical composition. */
export interface ClassMusicComposition extends ClassCreativeWork {
  /** The person or organization who wrote a composition, or who is the composer of a work performed at some event. */
  composer: Array<{ "@id": string }>;
  /** The date and place the work was first performed. */
  firstPerformance: Array<{ "@id": string }>;
  /** Smaller compositions included in this work (e.g. a movement in a symphony). */
  includedComposition: Array<{ "@id": string }>;
  /** The International Standard Musical Work Code for the composition. */
  iswcCode: Array<string>;
  /** The person who wrote the words. */
  lyricist: Array<{ "@id": string }>;
  /** The words in the song. */
  lyrics: Array<{ "@id": string }>;
  /** An arrangement derived from the composition. */
  musicArrangement: Array<{ "@id": string }>;
  /** The type of composition (e.g. overture, sonata, symphony, etc.). */
  musicCompositionForm: Array<string>;
  /** The key, mode, or scale this composition uses. */
  musicalKey: Array<string>;
  /** An audio recording of the work. */
  recordedAs: Array<{ "@id": string }>;
}
