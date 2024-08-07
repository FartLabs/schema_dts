// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MusicAlbumProductionType } from "labs/SchemaOrg_MusicAlbumProductionType.ts";
import type { SchemaOrg_MusicAlbumReleaseType } from "labs/SchemaOrg_MusicAlbumReleaseType.ts";
import type { SchemaOrg_MusicGroup } from "labs/SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_MusicPlaylist } from "labs/SchemaOrg_MusicPlaylist.ts";
import type { SchemaOrg_MusicRelease } from "labs/SchemaOrg_MusicRelease.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";

/**
 * A collection of music tracks.
 * @see https://schema.org/MusicAlbum
 */
export const SCHEMA_ORG_MusicAlbum = "https://schema.org/MusicAlbum" as const;

/**
 * A collection of music tracks.
 * @see https://schema.org/MusicAlbum
 */
export interface SchemaOrg_MusicAlbum extends SchemaOrg_MusicPlaylist {
    /**
     * Classification of the album by its type of content: soundtrack, live album, studio album, etc.
     * @see https://schema.org/albumProductionType
     */
    albumProductionType: Array<SchemaOrg_MusicAlbumProductionType>;
    /**
     * A release of this album.
     * @see https://schema.org/albumRelease
     */
    albumRelease: Array<SchemaOrg_MusicRelease>;
    /**
     * The kind of release which this album is: single, EP or album.
     * @see https://schema.org/albumReleaseType
     */
    albumReleaseType: Array<SchemaOrg_MusicAlbumReleaseType>;
    /**
     * The artist that performed this album or recording.
     * @see https://schema.org/byArtist
     */
    byArtist: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
}
