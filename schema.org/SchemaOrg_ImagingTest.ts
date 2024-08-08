// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalImagingTechnique } from "./SchemaOrg_MedicalImagingTechnique.ts";
import type { SchemaOrg_MedicalTest } from "./SchemaOrg_MedicalTest.ts";

/**
 * Any medical imaging modality typically used for diagnostic purposes.
 * @see https://schema.org/ImagingTest
 */
export const SCHEMA_ORG_ImagingTest = "https://schema.org/ImagingTest" as const;

/**
 * Any medical imaging modality typically used for diagnostic purposes.
 * @see https://schema.org/ImagingTest
 */
export interface SchemaOrg_ImagingTest extends SchemaOrg_MedicalTest {
    /**
     * Imaging technique used.
     * @see https://schema.org/imagingTechnique
     */
    imagingTechnique?: Array<SchemaOrg_MedicalImagingTechnique>;
}
