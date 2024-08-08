// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ItemList } from "./SchemaOrg_ItemList.ts";
import type { SchemaOrg_MusicAlbum } from "./SchemaOrg_MusicAlbum.ts";
import type { SchemaOrg_MusicRecording } from "./SchemaOrg_MusicRecording.ts";
import type { SchemaOrg_PerformingGroup } from "./SchemaOrg_PerformingGroup.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 * @see https://schema.org/MusicGroup
 */
export const SCHEMA_ORG_MusicGroup = "https://schema.org/MusicGroup" as const;

/**
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 * @see https://schema.org/MusicGroup
 */
export interface SchemaOrg_MusicGroup extends SchemaOrg_PerformingGroup {
    /**
     * A music album.
     * @see https://schema.org/album
     */
    album?: Array<SchemaOrg_MusicAlbum>;
    /**
     * A collection of music albums.
     * @see https://schema.org/albums
     */
    albums?: Array<SchemaOrg_MusicAlbum>;
    /**
     * Genre of the creative work, broadcast channel or group.
     * @see https://schema.org/genre
     */
    genre?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * A member of a music group&#x2014;for example, John, Paul, George, or Ringo.
     * @see https://schema.org/musicGroupMember
     */
    musicGroupMember?: Array<SchemaOrg_Person>;
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
