// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_MapCategoryType } from "./SchemaOrg_MapCategoryType.ts";

/**
 * A map.
 * @see https://schema.org/Map
 */
export const SCHEMA_ORG_Map = "https://schema.org/Map" as const;

/**
 * A map.
 * @see https://schema.org/Map
 */
export interface SchemaOrg_Map extends SchemaOrg_CreativeWork {
  /**
   * Indicates the kind of Map, from the MapCategoryType Enumeration.
   * @see https://schema.org/mapType
   */
  mapType?: Array<SchemaOrg_MapCategoryType>;
}
