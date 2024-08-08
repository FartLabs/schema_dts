// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The frequency in MHz and the modulation used for a particular BroadcastService.
 * @see https://schema.org/BroadcastFrequencySpecification
 */
export const SCHEMA_ORG_BroadcastFrequencySpecification =
  "https://schema.org/BroadcastFrequencySpecification" as const;

/**
 * The frequency in MHz and the modulation used for a particular BroadcastService.
 * @see https://schema.org/BroadcastFrequencySpecification
 */
export interface SchemaOrg_BroadcastFrequencySpecification
  extends SchemaOrg_Intangible {
  /**
   * The frequency in MHz for a particular broadcast.
   * @see https://schema.org/broadcastFrequencyValue
   */
  broadcastFrequencyValue?: Array<
    SchemaOrg_QuantitativeValue | SchemaOrg_Number
  >;
  /**
   * The modulation (e.g. FM, AM, etc) used by a particular broadcast service.
   * @see https://schema.org/broadcastSignalModulation
   */
  broadcastSignalModulation?: Array<
    SchemaOrg_QualitativeValue | SchemaOrg_Text
  >;
  /**
   * The subchannel used for the broadcast.
   * @see https://schema.org/broadcastSubChannel
   */
  broadcastSubChannel?: Array<SchemaOrg_Text>;
}
