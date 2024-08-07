// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Drug } from "labs/SchemaOrg_Drug.ts";
import type { SchemaOrg_MedicalCondition } from "labs/SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalDevice } from "labs/SchemaOrg_MedicalDevice.ts";
import type { SchemaOrg_MedicalEntity } from "labs/SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalEnumeration } from "labs/SchemaOrg_MedicalEnumeration.ts";
import type { SchemaOrg_MedicalSign } from "labs/SchemaOrg_MedicalSign.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Any medical test, typically performed for diagnostic purposes.
 * @see https://schema.org/MedicalTest
 */
export const SCHEMA_ORG_MedicalTest = "https://schema.org/MedicalTest" as const;

/**
 * Any medical test, typically performed for diagnostic purposes.
 * @see https://schema.org/MedicalTest
 */
export interface SchemaOrg_MedicalTest extends SchemaOrg_MedicalEntity {
    /**
     * Drugs that affect the test's results.
     * @see https://schema.org/affectedBy
     */
    affectedBy: Array<SchemaOrg_Drug>;
    /**
     * Range of acceptable values for a typical patient, when applicable.
     * @see https://schema.org/normalRange
     */
    normalRange: Array<SchemaOrg_MedicalEnumeration | SchemaOrg_Text>;
    /**
     * A sign detected by the test.
     * @see https://schema.org/signDetected
     */
    signDetected: Array<SchemaOrg_MedicalSign>;
    /**
     * A condition the test is used to diagnose.
     * @see https://schema.org/usedToDiagnose
     */
    usedToDiagnose: Array<SchemaOrg_MedicalCondition>;
    /**
     * Device used to perform the test.
     * @see https://schema.org/usesDevice
     */
    usesDevice: Array<SchemaOrg_MedicalDevice>;
}
