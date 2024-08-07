// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_UpdateAction } from "labs/SchemaOrg_UpdateAction.ts";

/**
 * The act of editing a recipient by replacing an old object with a new object.
 * @see https://schema.org/ReplaceAction
 */
export const SCHEMA_ORG_ReplaceAction = "https://schema.org/ReplaceAction" as const;

/**
 * The act of editing a recipient by replacing an old object with a new object.
 * @see https://schema.org/ReplaceAction
 */
export interface SchemaOrg_ReplaceAction extends SchemaOrg_UpdateAction {
    /**
     * A sub property of object. The object that is being replaced.
     * @see https://schema.org/replacee
     */
    replacee: Array<SchemaOrg_Thing>;
    /**
     * A sub property of object. The object that replaces.
     * @see https://schema.org/replacer
     */
    replacer: Array<SchemaOrg_Thing>;
}
