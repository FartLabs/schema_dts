// DO NOT EDIT: This file is generated.
import type { SchemaOrg_EntertainmentBusiness } from "./SchemaOrg_EntertainmentBusiness.ts";
import type { SchemaOrg_PlayAction } from "./SchemaOrg_PlayAction.ts";

/**
 * The act of participating in performance arts.
 * @see https://schema.org/PerformAction
 */
export const SCHEMA_ORG_PerformAction = "https://schema.org/PerformAction" as const;

/**
 * The act of participating in performance arts.
 * @see https://schema.org/PerformAction
 */
export interface SchemaOrg_PerformAction extends SchemaOrg_PlayAction {
    /**
     * A sub property of location. The entertainment business where the action occurred.
     * @see https://schema.org/entertainmentBusiness
     */
    entertainmentBusiness?: Array<SchemaOrg_EntertainmentBusiness>;
}
