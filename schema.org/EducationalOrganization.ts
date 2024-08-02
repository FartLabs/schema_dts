// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCivicStructure } from "./CivicStructure.ts";
import type { ClassOrganization } from "./Organization.ts";

/** An educational organization. */
export interface ClassEducationalOrganization
  extends ClassCivicStructure, ClassOrganization {
  /** Alumni of an organization. */
  alumni: Array<{ "@id": string }>;
}
