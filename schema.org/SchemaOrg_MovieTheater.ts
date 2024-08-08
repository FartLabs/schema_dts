// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CivicStructure } from "./SchemaOrg_CivicStructure.ts";
import type { SchemaOrg_EntertainmentBusiness } from "./SchemaOrg_EntertainmentBusiness.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";

/**
 * A movie theater.
 * @see https://schema.org/MovieTheater
 */
export const SCHEMA_ORG_MovieTheater =
  "https://schema.org/MovieTheater" as const;

/**
 * A movie theater.
 * @see https://schema.org/MovieTheater
 */
export interface SchemaOrg_MovieTheater
  extends SchemaOrg_EntertainmentBusiness, SchemaOrg_CivicStructure {
  /**
   * The number of screens in the movie theater.
   * @see https://schema.org/screenCount
   */
  screenCount?: Array<SchemaOrg_Number>;
}
