// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalTest } from "./SchemaOrg_MedicalTest.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
 * @see https://schema.org/PathologyTest
 */
export const SCHEMA_ORG_PathologyTest =
  "https://schema.org/PathologyTest" as const;

/**
 * A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
 * @see https://schema.org/PathologyTest
 */
export interface SchemaOrg_PathologyTest extends SchemaOrg_MedicalTest {
  /**
   * The type of tissue sample required for the test.
   * @see https://schema.org/tissueSample
   */
  tissueSample?: Array<SchemaOrg_Text>;
}
