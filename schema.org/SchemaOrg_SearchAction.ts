// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "labs/SchemaOrg_Action.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 * @see https://schema.org/SearchAction
 */
export const SCHEMA_ORG_SearchAction = "https://schema.org/SearchAction" as const;

/**
 * The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 * @see https://schema.org/SearchAction
 */
export interface SchemaOrg_SearchAction extends SchemaOrg_Action {
    /**
     * A sub property of instrument. The query used on this action.
     * @see https://schema.org/query
     */
    query: Array<SchemaOrg_Text>;
}
