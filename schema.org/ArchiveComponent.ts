// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections. */
export interface ClassArchiveComponent extends ClassCreativeWork {
  /** [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]]. */
  holdingArchive: Array<{ "@id": string }>;
  /** Current location of the item. */
  itemLocation: Array<string | { "@id": string }>;
}
