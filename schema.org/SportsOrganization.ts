// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganization } from "./Organization.ts";

/** Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations. */
export interface ClassSportsOrganization extends ClassOrganization {
  /** A type of sport (e.g. Baseball). */
  sport: Array<string | { "@id": string }>;
}
