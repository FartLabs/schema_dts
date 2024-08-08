// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AchieveAction } from "./SchemaOrg_AchieveAction.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * The act of achieving victory in a competitive activity.
 * @see https://schema.org/WinAction
 */
export const SCHEMA_ORG_WinAction = "https://schema.org/WinAction" as const;

/**
 * The act of achieving victory in a competitive activity.
 * @see https://schema.org/WinAction
 */
export interface SchemaOrg_WinAction extends SchemaOrg_AchieveAction {
    /**
     * A sub property of participant. The loser of the action.
     * @see https://schema.org/loser
     */
    loser?: Array<SchemaOrg_Person>;
}
