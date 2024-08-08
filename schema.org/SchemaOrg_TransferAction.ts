// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";

/**
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 * @see https://schema.org/TransferAction
 */
export const SCHEMA_ORG_TransferAction = "https://schema.org/TransferAction" as const;

/**
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 * @see https://schema.org/TransferAction
 */
export interface SchemaOrg_TransferAction extends SchemaOrg_Action {
    /**
     * A sub property of location. The original location of the object or the agent before the action.
     * @see https://schema.org/fromLocation
     */
    fromLocation?: Array<SchemaOrg_Place>;
    /**
     * A sub property of location. The final location of the object or the agent after the action.
     * @see https://schema.org/toLocation
     */
    toLocation?: Array<SchemaOrg_Place>;
}
