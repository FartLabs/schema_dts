// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "labs/SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 * @see https://schema.org/Game
 */
export const SCHEMA_ORG_Game = "https://schema.org/Game" as const;

/**
 * The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 * @see https://schema.org/Game
 */
export interface SchemaOrg_Game extends SchemaOrg_CreativeWork {
    /**
     * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
     * @see https://schema.org/characterAttribute
     */
    characterAttribute: Array<SchemaOrg_Thing>;
    /**
     * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
     * @see https://schema.org/gameItem
     */
    gameItem: Array<SchemaOrg_Thing>;
    /**
     * Real or fictional location of the game (or part of game).
     * @see https://schema.org/gameLocation
     */
    gameLocation: Array<SchemaOrg_Place | SchemaOrg_PostalAddress | SchemaOrg_URL>;
    /**
     * Indicate how many people can play this game (minimum, maximum, or range).
     * @see https://schema.org/numberOfPlayers
     */
    numberOfPlayers: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
     * @see https://schema.org/quest
     */
    quest: Array<SchemaOrg_Thing>;
}
