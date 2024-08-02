// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassSoftwareApplication } from "./SoftwareApplication.ts";
import type { ClassGame } from "./Game.ts";

/** A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device. */
export interface ClassVideoGame extends ClassSoftwareApplication, ClassGame {
  /** An actor, e.g. in TV, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip. */
  actor: Array<{ "@id": string }>;
  /** An actor, e.g. in TV, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip. */
  actors: Array<{ "@id": string }>;
  /** Cheat codes to the game. */
  cheatCode: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip. */
  director: Array<{ "@id": string }>;
  /** A director of e.g. TV, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip. */
  directors: Array<{ "@id": string }>;
  /** The edition of a video game. */
  gameEdition: Array<string>;
  /** The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>. */
  gamePlatform: Array<string | { "@id": string }>;
  /** The server on which  it is possible to play the game. */
  gameServer: Array<{ "@id": string }>;
  /** Links to tips, tactics, etc. */
  gameTip: Array<{ "@id": string }>;
  /** The composer of the soundtrack. */
  musicBy: Array<{ "@id": string }>;
  /** Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time. */
  playMode: Array<{ "@id": string }>;
  /** The trailer of a movie or TV/radio series, season, episode, etc. */
  trailer: Array<{ "@id": string }>;
}
