// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_MusicAlbum } from "./SchemaOrg_MusicAlbum.ts";
import type { SchemaOrg_MusicComposition } from "./SchemaOrg_MusicComposition.ts";
import type { SchemaOrg_MusicGroup } from "./SchemaOrg_MusicGroup.ts";
import type { SchemaOrg_MusicPlaylist } from "./SchemaOrg_MusicPlaylist.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A music recording (track), usually a single song.
 * @see https://schema.org/MusicRecording
 */
export const SCHEMA_ORG_MusicRecording = "https://schema.org/MusicRecording" as const;

/**
 * A music recording (track), usually a single song.
 * @see https://schema.org/MusicRecording
 */
export interface SchemaOrg_MusicRecording extends SchemaOrg_CreativeWork {
    /**
     * The artist that performed this album or recording.
     * @see https://schema.org/byArtist
     */
    byArtist?: Array<SchemaOrg_Person | SchemaOrg_MusicGroup>;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     * @see https://schema.org/duration
     */
    duration?: Array<SchemaOrg_Duration>;
    /**
     * The album to which this recording belongs.
     * @see https://schema.org/inAlbum
     */
    inAlbum?: Array<SchemaOrg_MusicAlbum>;
    /**
     * The playlist to which this recording belongs.
     * @see https://schema.org/inPlaylist
     */
    inPlaylist?: Array<SchemaOrg_MusicPlaylist>;
    /**
     * The International Standard Recording Code for the recording.
     * @see https://schema.org/isrcCode
     */
    isrcCode?: Array<SchemaOrg_Text>;
    /**
     * The composition this track is a recording of.
     * @see https://schema.org/recordingOf
     */
    recordingOf?: Array<SchemaOrg_MusicComposition>;
}
