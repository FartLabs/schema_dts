// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_HyperTocEntry } from "./SchemaOrg_HyperTocEntry.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";

/**
 * This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
 * @see https://schema.org/SeekToAction
 */
export const SCHEMA_ORG_SeekToAction =
  "https://schema.org/SeekToAction" as const;

/**
 * This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
 * @see https://schema.org/SeekToAction
 */
export interface SchemaOrg_SeekToAction extends SchemaOrg_Action {
  /**
   * The start time of the clip expressed as the number of seconds from the beginning of the work.
   * @see https://schema.org/startOffset
   */
  startOffset?: Array<SchemaOrg_Number | SchemaOrg_HyperTocEntry>;
}
