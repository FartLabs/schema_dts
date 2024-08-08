// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_HowToSupply } from "./SchemaOrg_HowToSupply.ts";
import type { SchemaOrg_HowToTool } from "./SchemaOrg_HowToTool.ts";
import type { SchemaOrg_ListItem } from "./SchemaOrg_ListItem.ts";
import type { SchemaOrg_MediaObject } from "./SchemaOrg_MediaObject.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 * @see https://schema.org/HowToDirection
 */
export const SCHEMA_ORG_HowToDirection =
  "https://schema.org/HowToDirection" as const;

/**
 * A direction indicating a single action to do in the instructions for how to achieve a result.
 * @see https://schema.org/HowToDirection
 */
export interface SchemaOrg_HowToDirection
  extends SchemaOrg_ListItem, SchemaOrg_CreativeWork {
  /**
   * A media object representing the circumstances after performing this direction.
   * @see https://schema.org/afterMedia
   */
  afterMedia?: Array<SchemaOrg_URL | SchemaOrg_MediaObject>;
  /**
   * A media object representing the circumstances before performing this direction.
   * @see https://schema.org/beforeMedia
   */
  beforeMedia?: Array<SchemaOrg_MediaObject | SchemaOrg_URL>;
  /**
   * A media object representing the circumstances while performing this direction.
   * @see https://schema.org/duringMedia
   */
  duringMedia?: Array<SchemaOrg_URL | SchemaOrg_MediaObject>;
  /**
   * The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/performTime
   */
  performTime?: Array<SchemaOrg_Duration>;
  /**
   * The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/prepTime
   */
  prepTime?: Array<SchemaOrg_Duration>;
  /**
   * A sub-property of instrument. A supply consumed when performing instructions or a direction.
   * @see https://schema.org/supply
   */
  supply?: Array<SchemaOrg_HowToSupply | SchemaOrg_Text>;
  /**
   * A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.
   * @see https://schema.org/tool
   */
  tool?: Array<SchemaOrg_HowToTool | SchemaOrg_Text>;
  /**
   * The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/totalTime
   */
  totalTime?: Array<SchemaOrg_Duration>;
}
