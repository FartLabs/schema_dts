// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_MedicalIntangible } from "./SchemaOrg_MedicalIntangible.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A code for a medical entity.
 * @see https://schema.org/MedicalCode
 */
export const SCHEMA_ORG_MedicalCode = "https://schema.org/MedicalCode" as const;

/**
 * A code for a medical entity.
 * @see https://schema.org/MedicalCode
 */
export interface SchemaOrg_MedicalCode extends SchemaOrg_CategoryCode, SchemaOrg_MedicalIntangible {
    /**
     * A short textual code that uniquely identifies the value.
     * @see https://schema.org/codeValue
     */
    codeValue?: Array<SchemaOrg_Text>;
    /**
     * The coding system, e.g. 'ICD-10'.
     * @see https://schema.org/codingSystem
     */
    codingSystem?: Array<SchemaOrg_Text>;
}
