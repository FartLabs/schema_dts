// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_CreativeWorkSeason } from "./SchemaOrg_CreativeWorkSeason.ts";
import type { SchemaOrg_CreativeWorkSeries } from "./SchemaOrg_CreativeWorkSeries.ts";
import type { SchemaOrg_Episode } from "./SchemaOrg_Episode.ts";
import type { SchemaOrg_GamePlayMode } from "./SchemaOrg_GamePlayMode.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_MusicGroup } from "./SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_VideoObject } from "./SchemaOrg_VideoObject.ts";

/**
 * A video game series.
 * @see https://schema.org/VideoGameSeries
 */
export const SCHEMA_ORG_VideoGameSeries =
  "https://schema.org/VideoGameSeries" as const;

/**
 * A video game series.
 * @see https://schema.org/VideoGameSeries
 */
export interface SchemaOrg_VideoGameSeries
  extends SchemaOrg_CreativeWorkSeries {
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
   * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
   * @see https://schema.org/characterAttribute
   */
  characterAttribute?: Array<SchemaOrg_Thing>;
  /**
   * Cheat codes to the game.
   * @see https://schema.org/cheatCode
   */
  cheatCode?: Array<SchemaOrg_CreativeWork>;
  /**
   * A season that is part of the media series.
   * @see https://schema.org/containsSeason
   */
  containsSeason?: Array<SchemaOrg_CreativeWorkSeason>;
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
   * An episode of a TV, radio or game media within a series or season.
   * @see https://schema.org/episode
   */
  episode?: Array<SchemaOrg_Episode>;
  /**
   * An episode of a TV/radio series or season.
   * @see https://schema.org/episodes
   */
  episodes?: Array<SchemaOrg_Episode>;
  /**
   * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
   * @see https://schema.org/gameItem
   */
  gameItem?: Array<SchemaOrg_Thing>;
  /**
   * Real or fictional location of the game (or part of game).
   * @see https://schema.org/gameLocation
   */
  gameLocation?: Array<
    SchemaOrg_Place | SchemaOrg_PostalAddress | SchemaOrg_URL
  >;
  /**
   * The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
   * @see https://schema.org/gamePlatform
   */
  gamePlatform?: Array<SchemaOrg_Text | SchemaOrg_URL | SchemaOrg_Thing>;
  /**
   * The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy?: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
  /**
   * The number of episodes in this season or series.
   * @see https://schema.org/numberOfEpisodes
   */
  numberOfEpisodes?: Array<SchemaOrg_Integer>;
  /**
   * Indicate how many people can play this game (minimum, maximum, or range).
   * @see https://schema.org/numberOfPlayers
   */
  numberOfPlayers?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The number of seasons in this series.
   * @see https://schema.org/numberOfSeasons
   */
  numberOfSeasons?: Array<SchemaOrg_Integer>;
  /**
   * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
   * @see https://schema.org/playMode
   */
  playMode?: Array<SchemaOrg_GamePlayMode>;
  /**
   * The production company or studio responsible for the item, e.g. series, video game, episode etc.
   * @see https://schema.org/productionCompany
   */
  productionCompany?: Array<SchemaOrg_Organization>;
  /**
   * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
   * @see https://schema.org/quest
   */
  quest?: Array<SchemaOrg_Thing>;
  /**
   * A season in a media series.
   * @see https://schema.org/season
   */
  season?: Array<SchemaOrg_CreativeWorkSeason | SchemaOrg_URL>;
  /**
   * A season in a media series.
   * @see https://schema.org/seasons
   */
  seasons?: Array<SchemaOrg_CreativeWorkSeason>;
  /**
   * The trailer of a movie or TV/radio series, season, episode, etc.
   * @see https://schema.org/trailer
   */
  trailer?: Array<SchemaOrg_VideoObject>;
}
