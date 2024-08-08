// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_Muscle } from "./SchemaOrg_Muscle.ts";
import type { SchemaOrg_Nerve } from "./SchemaOrg_Nerve.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Vessel } from "./SchemaOrg_Vessel.ts";

/**
 * A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
 * @see https://schema.org/Muscle
 */
export const SCHEMA_ORG_Muscle = "https://schema.org/Muscle" as const;

/**
 * A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
 * @see https://schema.org/Muscle
 */
export interface SchemaOrg_Muscle extends SchemaOrg_AnatomicalStructure {
    /**
     * The muscle whose action counteracts the specified muscle.
     * @see https://schema.org/antagonist
     */
    antagonist?: Array<SchemaOrg_Muscle>;
    /**
     * The blood vessel that carries blood from the heart to the muscle.
     * @see https://schema.org/bloodSupply
     */
    bloodSupply?: Array<SchemaOrg_Vessel>;
    /**
     * The place of attachment of a muscle, or what the muscle moves.
     * @see https://schema.org/insertion
     */
    insertion?: Array<SchemaOrg_AnatomicalStructure>;
    /**
     * The movement the muscle generates.
     * @see https://schema.org/muscleAction
     */
    muscleAction?: Array<SchemaOrg_Text>;
    /**
     * The underlying innervation associated with the muscle.
     * @see https://schema.org/nerve
     */
    nerve?: Array<SchemaOrg_Nerve>;
}
