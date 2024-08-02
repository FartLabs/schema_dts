// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Server that provides game interaction in a multiplayer game. */
export interface ClassGameServer extends ClassIntangible {
  /** Video game which is played on this server. */
  game: Array<{ "@id": string }>;
  /** Number of players on the server. */
  playersOnline: Array<{ "@id": string }>;
  /** Status of a game server. */
  serverStatus: Array<{ "@id": string }>;
}
