// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_OrganizeAction } from "./SchemaOrg_OrganizeAction.ts";

/**
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 * @see https://schema.org/PlanAction
 */
export const SCHEMA_ORG_PlanAction = "https://schema.org/PlanAction" as const;

/**
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 * @see https://schema.org/PlanAction
 */
export interface SchemaOrg_PlanAction extends SchemaOrg_OrganizeAction {
    /**
     * The time the object is scheduled to.
     * @see https://schema.org/scheduledTime
     */
    scheduledTime?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
}
