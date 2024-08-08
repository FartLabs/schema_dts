// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_BrainStructure } from "./SchemaOrg_BrainStructure.ts";
import type { SchemaOrg_Muscle } from "./SchemaOrg_Muscle.ts";
import type { SchemaOrg_SuperficialAnatomy } from "./SchemaOrg_SuperficialAnatomy.ts";

/**
 * A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
 * @see https://schema.org/Nerve
 */
export const SCHEMA_ORG_Nerve = "https://schema.org/Nerve" as const;

/**
 * A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
 * @see https://schema.org/Nerve
 */
export interface SchemaOrg_Nerve extends SchemaOrg_AnatomicalStructure {
    /**
     * The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]].
     * @see https://schema.org/branch
     */
    branch?: Array<SchemaOrg_AnatomicalStructure>;
    /**
     * The neurological pathway extension that involves muscle control.
     * @see https://schema.org/nerveMotor
     */
    nerveMotor?: Array<SchemaOrg_Muscle>;
    /**
     * The neurological pathway extension that inputs and sends information to the brain or spinal cord.
     * @see https://schema.org/sensoryUnit
     */
    sensoryUnit?: Array<SchemaOrg_SuperficialAnatomy | SchemaOrg_AnatomicalStructure>;
    /**
     * The neurological pathway that originates the neurons.
     * @see https://schema.org/sourcedFrom
     */
    sourcedFrom?: Array<SchemaOrg_BrainStructure>;
}
