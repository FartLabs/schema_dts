// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Intended audience for an item, i.e. the group for whom the item was created.
 * @see https://schema.org/Audience
 */
export const SCHEMA_ORG_Audience = "https://schema.org/Audience" as const;

/**
 * Intended audience for an item, i.e. the group for whom the item was created.
 * @see https://schema.org/Audience
 */
export interface SchemaOrg_Audience extends SchemaOrg_Intangible {
    /**
     * The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
     * @see https://schema.org/audienceType
     */
    audienceType?: Array<SchemaOrg_Text>;
    /**
     * The geographic area associated with the audience.
     * @see https://schema.org/geographicArea
     */
    geographicArea?: Array<SchemaOrg_AdministrativeArea>;
}
