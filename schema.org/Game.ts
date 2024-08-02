// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting. */
export interface ClassGame extends ClassCreativeWork {
  /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
  characterAttribute: Array<{ "@id": string }>;
  /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
  gameItem: Array<{ "@id": string }>;
  /** Real or fictional location of the game (or part of game). */
  gameLocation: Array<{ "@id": string }>;
  /** Indicate how many people can play this game (minimum, maximum, or range). */
  numberOfPlayers: Array<{ "@id": string }>;
  /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
  quest: Array<{ "@id": string }>;
}
