// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_ItemList } from "./SchemaOrg_ItemList.ts";
import type { SchemaOrg_ListItem } from "./SchemaOrg_ListItem.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
 * @see https://schema.org/HowToSection
 */
export const SCHEMA_ORG_HowToSection =
  "https://schema.org/HowToSection" as const;

/**
 * A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
 * @see https://schema.org/HowToSection
 */
export interface SchemaOrg_HowToSection
  extends SchemaOrg_ListItem, SchemaOrg_CreativeWork, SchemaOrg_ItemList {
  /**
   * A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
   * @see https://schema.org/steps
   */
  steps?: Array<SchemaOrg_CreativeWork | SchemaOrg_ItemList | SchemaOrg_Text>;
}
