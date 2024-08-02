// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWorkSeries } from "./CreativeWorkSeries.ts";

/** A video game series. */
export interface ClassVideoGameSeries extends ClassCreativeWorkSeries {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage). */
  characterAttribute: Array<{ "@id": string }>;
  /** Cheat codes to the game. */
  cheatCode: Array<{ "@id": string }>;
  /** A season that is part of the media series. */
  containsSeason: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** An episode of a TV, radio or game media within a series or season. */
  episode: Array<{ "@id": string }>;
  /** An episode of a TV/radio series or season. */
  episodes: Array<{ "@id": string }>;
  /** An item is an object within the game world that can be collected by a player or, occasionally, a non-player character. */
  gameItem: Array<{ "@id": string }>;
  /** Real or fictional location of the game (or part of game). */
  gameLocation: Array<{ "@id": string }>;
  /** The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>. */
  gamePlatform: Array<string | { "@id": string }>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** The number of episodes in this season or series. */
  numberOfEpisodes: Array<{ "@id": string }>;
  /** Indicate how many people can play this game (minimum, maximum, or range). */
  numberOfPlayers: Array<{ "@id": string }>;
  /** The number of seasons in this series. */
  numberOfSeasons: Array<{ "@id": string }>;
  /** Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time. */
  playMode: Array<{ "@id": string }>;
  /** The production company or studio responsible for the item, e.g. series, video game, episode etc. */
  productionCompany: Array<{ "@id": string }>;
  /** The task that a player-controlled character, or group of characters may complete in order to gain a reward. */
  quest: Array<{ "@id": string }>;
  /** A season in a media series. */
  season: Array<{ "@id": string }>;
  /** A season in a media series. */
  seasons: Array<{ "@id": string }>;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: Array<{ "@id": string }>;
}
