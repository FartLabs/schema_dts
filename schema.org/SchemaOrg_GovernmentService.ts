// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "labs/SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 * @see https://schema.org/GovernmentService
 */
export const SCHEMA_ORG_GovernmentService = "https://schema.org/GovernmentService" as const;

/**
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 * @see https://schema.org/GovernmentService
 */
export interface SchemaOrg_GovernmentService extends SchemaOrg_Service {
    /**
     * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
     * @see https://schema.org/jurisdiction
     */
    jurisdiction: Array<SchemaOrg_AdministrativeArea | SchemaOrg_Text>;
    /**
     * The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.
     * @see https://schema.org/serviceOperator
     */
    serviceOperator: Array<SchemaOrg_Organization>;
}
