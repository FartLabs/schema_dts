// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";

/**
 * The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 * @see https://schema.org/MoveAction
 */
export const SCHEMA_ORG_MoveAction = "https://schema.org/MoveAction" as const;

/**
 * The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 * @see https://schema.org/MoveAction
 */
export interface SchemaOrg_MoveAction extends SchemaOrg_Action {
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
