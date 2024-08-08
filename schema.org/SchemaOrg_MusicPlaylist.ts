// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_ItemList } from "./SchemaOrg_ItemList.ts";
import type { SchemaOrg_MusicRecording } from "./SchemaOrg_MusicRecording.ts";

/**
 * A collection of music tracks in playlist form.
 * @see https://schema.org/MusicPlaylist
 */
export const SCHEMA_ORG_MusicPlaylist = "https://schema.org/MusicPlaylist" as const;

/**
 * A collection of music tracks in playlist form.
 * @see https://schema.org/MusicPlaylist
 */
export interface SchemaOrg_MusicPlaylist extends SchemaOrg_CreativeWork {
    /**
     * The number of tracks in this album or playlist.
     * @see https://schema.org/numTracks
     */
    numTracks?: Array<SchemaOrg_Integer>;
    /**
     * A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
     * @see https://schema.org/track
     */
    track?: Array<SchemaOrg_MusicRecording | SchemaOrg_ItemList>;
    /**
     * A music recording (track)&#x2014;usually a single song.
     * @see https://schema.org/tracks
     */
    tracks?: Array<SchemaOrg_MusicRecording>;
}
