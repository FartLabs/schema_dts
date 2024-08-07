// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Role } from "labs/SchemaOrg_Role.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 * @see https://schema.org/PerformanceRole
 */
export const SCHEMA_ORG_PerformanceRole = "https://schema.org/PerformanceRole" as const;

/**
 * A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 * @see https://schema.org/PerformanceRole
 */
export interface SchemaOrg_PerformanceRole extends SchemaOrg_Role {
    /**
     * The name of a character played in some acting or performing role, i.e. in a PerformanceRole.
     * @see https://schema.org/characterName
     */
    characterName: Array<SchemaOrg_Text>;
}
