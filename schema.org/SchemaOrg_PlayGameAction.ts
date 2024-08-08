// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ConsumeAction } from "./SchemaOrg_ConsumeAction.ts";
import type { SchemaOrg_GameAvailabilityEnumeration } from "./SchemaOrg_GameAvailabilityEnumeration.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The act of playing a video game.
 * @see https://schema.org/PlayGameAction
 */
export const SCHEMA_ORG_PlayGameAction =
  "https://schema.org/PlayGameAction" as const;

/**
 * The act of playing a video game.
 * @see https://schema.org/PlayGameAction
 */
export interface SchemaOrg_PlayGameAction extends SchemaOrg_ConsumeAction {
  /**
   * Indicates the availability type of the game content associated with this action, such as whether it is a full version or a demo.
   * @see https://schema.org/gameAvailabilityType
   */
  gameAvailabilityType?: Array<
    SchemaOrg_GameAvailabilityEnumeration | SchemaOrg_Text
  >;
}
