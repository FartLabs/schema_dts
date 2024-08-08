// DO NOT EDIT: This file is generated.
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A software application designed specifically to work well on a mobile device such as a telephone.
 * @see https://schema.org/MobileApplication
 */
export const SCHEMA_ORG_MobileApplication =
  "https://schema.org/MobileApplication" as const;

/**
 * A software application designed specifically to work well on a mobile device such as a telephone.
 * @see https://schema.org/MobileApplication
 */
export interface SchemaOrg_MobileApplication
  extends SchemaOrg_SoftwareApplication {
  /**
   * Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).
   * @see https://schema.org/carrierRequirements
   */
  carrierRequirements?: Array<SchemaOrg_Text>;
}
