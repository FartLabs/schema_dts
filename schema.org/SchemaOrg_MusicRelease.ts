// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_MusicAlbum } from "./SchemaOrg_MusicAlbum.ts";
import type { SchemaOrg_MusicPlaylist } from "./SchemaOrg_MusicPlaylist.ts";
import type { SchemaOrg_MusicReleaseFormatType } from "./SchemaOrg_MusicReleaseFormatType.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A MusicRelease is a specific release of a music album.
 * @see https://schema.org/MusicRelease
 */
export const SCHEMA_ORG_MusicRelease =
  "https://schema.org/MusicRelease" as const;

/**
 * A MusicRelease is a specific release of a music album.
 * @see https://schema.org/MusicRelease
 */
export interface SchemaOrg_MusicRelease extends SchemaOrg_MusicPlaylist {
  /**
   * The catalog number for the release.
   * @see https://schema.org/catalogNumber
   */
  catalogNumber?: Array<SchemaOrg_Text>;
  /**
   * The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.
   * @see https://schema.org/creditedTo
   */
  creditedTo?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/duration
   */
  duration?: Array<SchemaOrg_Duration>;
  /**
   * Format of this release (the type of recording media used, i.e. compact disc, digital media, LP, etc.).
   * @see https://schema.org/musicReleaseFormat
   */
  musicReleaseFormat?: Array<SchemaOrg_MusicReleaseFormatType>;
  /**
   * The label that issued the release.
   * @see https://schema.org/recordLabel
   */
  recordLabel?: Array<SchemaOrg_Organization>;
  /**
   * The album this is a release of.
   * @see https://schema.org/releaseOf
   */
  releaseOf?: Array<SchemaOrg_MusicAlbum>;
}
