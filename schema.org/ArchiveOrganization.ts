// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLocalBusiness } from "./LocalBusiness.ts";

/** An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public. */
export interface ClassArchiveOrganization extends ClassLocalBusiness {
  /** Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]]. */
  archiveHeld: Array<{ "@id": string }>;
}
