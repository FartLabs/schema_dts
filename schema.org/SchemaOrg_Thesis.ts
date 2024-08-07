// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.
 * @see https://schema.org/Thesis
 */
export const SCHEMA_ORG_Thesis = "https://schema.org/Thesis" as const;

/**
 * A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.
 * @see https://schema.org/Thesis
 */
export interface SchemaOrg_Thesis extends SchemaOrg_CreativeWork {
    /**
     * Qualification, candidature, degree, application that Thesis supports.
     * @see https://schema.org/inSupportOf
     */
    inSupportOf: Array<SchemaOrg_Text>;
}
