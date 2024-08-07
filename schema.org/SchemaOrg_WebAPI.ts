// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * An application programming interface accessible over Web/Internet technologies.
 * @see https://schema.org/WebAPI
 */
export const SCHEMA_ORG_WebAPI = "https://schema.org/WebAPI" as const;

/**
 * An application programming interface accessible over Web/Internet technologies.
 * @see https://schema.org/WebAPI
 */
export interface SchemaOrg_WebAPI extends SchemaOrg_Service {
    /**
     * Further documentation describing the Web API in more detail.
     * @see https://schema.org/documentation
     */
    documentation: Array<SchemaOrg_URL | SchemaOrg_CreativeWork>;
}
