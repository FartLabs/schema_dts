// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Organization: A business corporation.
 * @see https://schema.org/Corporation
 */
export const SCHEMA_ORG_Corporation = "https://schema.org/Corporation" as const;

/**
 * Organization: A business corporation.
 * @see https://schema.org/Corporation
 */
export interface SchemaOrg_Corporation extends SchemaOrg_Organization {
  /**
   * The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO 15022.
   * @see https://schema.org/tickerSymbol
   */
  tickerSymbol?: Array<SchemaOrg_Text>;
}
