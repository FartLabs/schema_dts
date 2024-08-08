// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_MusicComposition } from "./SchemaOrg_MusicComposition.ts";
import type { SchemaOrg_MusicRecording } from "./SchemaOrg_MusicRecording.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A musical composition.
 * @see https://schema.org/MusicComposition
 */
export const SCHEMA_ORG_MusicComposition =
  "https://schema.org/MusicComposition" as const;

/**
 * A musical composition.
 * @see https://schema.org/MusicComposition
 */
export interface SchemaOrg_MusicComposition extends SchemaOrg_CreativeWork {
  /**
   * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
   * @see https://schema.org/composer
   */
  composer?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The date and place the work was first performed.
   * @see https://schema.org/firstPerformance
   */
  firstPerformance?: Array<SchemaOrg_Event>;
  /**
   * Smaller compositions included in this work (e.g. a movement in a symphony).
   * @see https://schema.org/includedComposition
   */
  includedComposition?: Array<SchemaOrg_MusicComposition>;
  /**
   * The International Standard Musical Work Code for the composition.
   * @see https://schema.org/iswcCode
   */
  iswcCode?: Array<SchemaOrg_Text>;
  /**
   * The person who wrote the words.
   * @see https://schema.org/lyricist
   */
  lyricist?: Array<SchemaOrg_Person>;
  /**
   * The words in the song.
   * @see https://schema.org/lyrics
   */
  lyrics?: Array<SchemaOrg_CreativeWork>;
  /**
   * An arrangement derived from the composition.
   * @see https://schema.org/musicArrangement
   */
  musicArrangement?: Array<SchemaOrg_MusicComposition>;
  /**
   * The type of composition (e.g. overture, sonata, symphony, etc.).
   * @see https://schema.org/musicCompositionForm
   */
  musicCompositionForm?: Array<SchemaOrg_Text>;
  /**
   * The key, mode, or scale this composition uses.
   * @see https://schema.org/musicalKey
   */
  musicalKey?: Array<SchemaOrg_Text>;
  /**
   * An audio recording of the work.
   * @see https://schema.org/recordedAs
   */
  recordedAs?: Array<SchemaOrg_MusicRecording>;
}
