// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ChooseAction } from "./SchemaOrg_ChooseAction.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * The act of expressing a preference from a fixed/finite/structured set of choices/options.
 * @see https://schema.org/VoteAction
 */
export const SCHEMA_ORG_VoteAction = "https://schema.org/VoteAction" as const;

/**
 * The act of expressing a preference from a fixed/finite/structured set of choices/options.
 * @see https://schema.org/VoteAction
 */
export interface SchemaOrg_VoteAction extends SchemaOrg_ChooseAction {
    /**
     * A sub property of object. The candidate subject of this action.
     * @see https://schema.org/candidate
     */
    candidate?: Array<SchemaOrg_Person>;
}
