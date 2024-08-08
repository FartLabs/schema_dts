// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalTest } from "./SchemaOrg_MedicalTest.ts";

/**
 * Any collection of tests commonly ordered together.
 * @see https://schema.org/MedicalTestPanel
 */
export const SCHEMA_ORG_MedicalTestPanel = "https://schema.org/MedicalTestPanel" as const;

/**
 * Any collection of tests commonly ordered together.
 * @see https://schema.org/MedicalTestPanel
 */
export interface SchemaOrg_MedicalTestPanel extends SchemaOrg_MedicalTest {
    /**
     * A component test of the panel.
     * @see https://schema.org/subTest
     */
    subTest?: Array<SchemaOrg_MedicalTest>;
}
