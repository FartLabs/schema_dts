// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ArchiveComponent } from "./SchemaOrg_ArchiveComponent.ts";
import type { SchemaOrg_LocalBusiness } from "./SchemaOrg_LocalBusiness.ts";

/**
 * An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
 * @see https://schema.org/ArchiveOrganization
 */
export const SCHEMA_ORG_ArchiveOrganization =
  "https://schema.org/ArchiveOrganization" as const;

/**
 * An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
 * @see https://schema.org/ArchiveOrganization
 */
export interface SchemaOrg_ArchiveOrganization extends SchemaOrg_LocalBusiness {
  /**
   * Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]].
   * @see https://schema.org/archiveHeld
   */
  archiveHeld?: Array<SchemaOrg_ArchiveComponent>;
}
