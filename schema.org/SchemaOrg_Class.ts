// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Class } from "./SchemaOrg_Class.ts";
import type { SchemaOrg_Enumeration } from "./SchemaOrg_Enumeration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Property } from "./SchemaOrg_Property.ts";

/**
 * A class, also often called a 'Type'; equivalent to rdfs:Class.
 * @see https://schema.org/Class
 */
export const SCHEMA_ORG_Class = "https://schema.org/Class" as const;

/**
 * A class, also often called a 'Type'; equivalent to rdfs:Class.
 * @see https://schema.org/Class
 */
export interface SchemaOrg_Class extends SchemaOrg_Intangible {
  /**
   * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
   * @see https://schema.org/supersededBy
   */
  supersededBy?: Array<
    SchemaOrg_Class | SchemaOrg_Enumeration | SchemaOrg_Property
  >;
}
