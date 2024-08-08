// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_Vessel } from "./SchemaOrg_Vessel.ts";

/**
 * A type of blood vessel that specifically carries blood away from the heart.
 * @see https://schema.org/Artery
 */
export const SCHEMA_ORG_Artery = "https://schema.org/Artery" as const;

/**
 * A type of blood vessel that specifically carries blood away from the heart.
 * @see https://schema.org/Artery
 */
export interface SchemaOrg_Artery extends SchemaOrg_Vessel {
    /**
     * The branches that comprise the arterial structure.
     * @see https://schema.org/arterialBranch
     */
    arterialBranch?: Array<SchemaOrg_AnatomicalStructure>;
    /**
     * The area to which the artery supplies blood.
     * @see https://schema.org/supplyTo
     */
    supplyTo?: Array<SchemaOrg_AnatomicalStructure>;
}
