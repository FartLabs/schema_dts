// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassService } from "./Service.ts";

/** A service provided by a government organization, e.g. food stamps, veterans benefits, etc. */
export interface ClassGovernmentService extends ClassService {
  /** Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based. */
  jurisdiction: Array<string | { "@id": string }>;
  /** The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor. */
  serviceOperator: Array<{ "@id": string }>;
}
