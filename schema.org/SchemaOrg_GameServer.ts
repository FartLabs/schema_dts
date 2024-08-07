// DO NOT EDIT: This file is generated.
import type { SchemaOrg_GameServerStatus } from "labs/SchemaOrg_GameServerStatus.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_VideoGame } from "labs/SchemaOrg_VideoGame.ts";

/**
 * Server that provides game interaction in a multiplayer game.
 * @see https://schema.org/GameServer
 */
export const SCHEMA_ORG_GameServer = "https://schema.org/GameServer" as const;

/**
 * Server that provides game interaction in a multiplayer game.
 * @see https://schema.org/GameServer
 */
export interface SchemaOrg_GameServer extends SchemaOrg_Intangible {
    /**
     * Video game which is played on this server.
     * @see https://schema.org/game
     */
    game: Array<SchemaOrg_VideoGame>;
    /**
     * Number of players on the server.
     * @see https://schema.org/playersOnline
     */
    playersOnline: Array<SchemaOrg_Integer>;
    /**
     * Status of a game server.
     * @see https://schema.org/serverStatus
     */
    serverStatus: Array<SchemaOrg_GameServerStatus>;
}
