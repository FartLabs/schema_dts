// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalAudience } from "./SchemaOrg_MedicalAudience.ts";
import type { SchemaOrg_MedicalAudienceType } from "./SchemaOrg_MedicalAudienceType.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_WebPage } from "./SchemaOrg_WebPage.ts";

/**
 * A web page that provides medical information.
 * @see https://schema.org/MedicalWebPage
 */
export const SCHEMA_ORG_MedicalWebPage = "https://schema.org/MedicalWebPage" as const;

/**
 * A web page that provides medical information.
 * @see https://schema.org/MedicalWebPage
 */
export interface SchemaOrg_MedicalWebPage extends SchemaOrg_WebPage {
    /**
     * An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.
     * @see https://schema.org/aspect
     */
    aspect?: Array<SchemaOrg_Text>;
    /**
     * Medical audience for page.
     * @see https://schema.org/medicalAudience
     */
    medicalAudience?: Array<SchemaOrg_MedicalAudienceType | SchemaOrg_MedicalAudience>;
}
