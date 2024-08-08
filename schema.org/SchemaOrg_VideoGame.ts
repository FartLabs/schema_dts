// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Game } from "./SchemaOrg_Game.ts";
import type { SchemaOrg_GamePlayMode } from "./SchemaOrg_GamePlayMode.ts";
import type { SchemaOrg_GameServer } from "./SchemaOrg_GameServer.ts";
import type { SchemaOrg_MusicGroup } from "./SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_VideoObject } from "./SchemaOrg_VideoObject.ts";

/**
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 * @see https://schema.org/VideoGame
 */
export const SCHEMA_ORG_VideoGame = "https://schema.org/VideoGame" as const;

/**
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 * @see https://schema.org/VideoGame
 */
export interface SchemaOrg_VideoGame
  extends SchemaOrg_SoftwareApplication, SchemaOrg_Game {
  /**
   * An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor?: Array<SchemaOrg_Person>;
  /**
   * An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actors
   */
  actors?: Array<SchemaOrg_Person>;
  /**
   * Cheat codes to the game.
   * @see https://schema.org/cheatCode
   */
  cheatCode?: Array<SchemaOrg_CreativeWork>;
  /**
   * A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director?: Array<SchemaOrg_Person>;
  /**
   * A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/directors
   */
  directors?: Array<SchemaOrg_Person>;
  /**
   * The edition of a video game.
   * @see https://schema.org/gameEdition
   */
  gameEdition?: Array<SchemaOrg_Text>;
  /**
   * The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
   * @see https://schema.org/gamePlatform
   */
  gamePlatform?: Array<SchemaOrg_Text | SchemaOrg_URL | SchemaOrg_Thing>;
  /**
   * The server on which  it is possible to play the game.
   * @see https://schema.org/gameServer
   */
  gameServer?: Array<SchemaOrg_GameServer>;
  /**
   * Links to tips, tactics, etc.
   * @see https://schema.org/gameTip
   */
  gameTip?: Array<SchemaOrg_CreativeWork>;
  /**
   * The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy?: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
  /**
   * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
   * @see https://schema.org/playMode
   */
  playMode?: Array<SchemaOrg_GamePlayMode>;
  /**
   * The trailer of a movie or TV/radio series, season, episode, etc.
   * @see https://schema.org/trailer
   */
  trailer?: Array<SchemaOrg_VideoObject>;
}
