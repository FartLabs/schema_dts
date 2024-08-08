// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ArchiveOrganization } from "./SchemaOrg_ArchiveOrganization.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
 * @see https://schema.org/ArchiveComponent
 */
export const SCHEMA_ORG_ArchiveComponent =
  "https://schema.org/ArchiveComponent" as const;

/**
 * An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
 * @see https://schema.org/ArchiveComponent
 */
export interface SchemaOrg_ArchiveComponent extends SchemaOrg_CreativeWork {
  /**
   * [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]].
   * @see https://schema.org/holdingArchive
   */
  holdingArchive?: Array<SchemaOrg_ArchiveOrganization>;
  /**
   * Current location of the item.
   * @see https://schema.org/itemLocation
   */
  itemLocation?: Array<
    SchemaOrg_Text | SchemaOrg_Place | SchemaOrg_PostalAddress
  >;
}
