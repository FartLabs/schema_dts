// DO NOT EDIT: This file is generated.
import type { SchemaOrg_LocalBusiness } from "./SchemaOrg_LocalBusiness.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Financial services business.
 * @see https://schema.org/FinancialService
 */
export const SCHEMA_ORG_FinancialService =
  "https://schema.org/FinancialService" as const;

/**
 * Financial services business.
 * @see https://schema.org/FinancialService
 */
export interface SchemaOrg_FinancialService extends SchemaOrg_LocalBusiness {
  /**
   * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
   * @see https://schema.org/feesAndCommissionsSpecification
   */
  feesAndCommissionsSpecification?: Array<SchemaOrg_URL | SchemaOrg_Text>;
}
