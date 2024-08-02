// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassOrganization } from "./Organization.ts";

/** Organization: A business corporation. */
export interface ClassCorporation extends ClassOrganization {
  /** The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO 15022. */
  tickerSymbol: Array<string>;
}
