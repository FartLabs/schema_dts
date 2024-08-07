// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AchieveAction } from "labs/SchemaOrg_AchieveAction.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";

/**
 * The act of being defeated in a competitive activity.
 * @see https://schema.org/LoseAction
 */
export const SCHEMA_ORG_LoseAction = "https://schema.org/LoseAction" as const;

/**
 * The act of being defeated in a competitive activity.
 * @see https://schema.org/LoseAction
 */
export interface SchemaOrg_LoseAction extends SchemaOrg_AchieveAction {
    /**
     * A sub property of participant. The winner of the action.
     * @see https://schema.org/winner
     */
    winner: Array<SchemaOrg_Person>;
}
