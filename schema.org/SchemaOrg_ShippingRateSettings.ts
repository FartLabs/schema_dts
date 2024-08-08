// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DefinedRegion } from "./SchemaOrg_DefinedRegion.ts";
import type { SchemaOrg_DeliveryChargeSpecification } from "./SchemaOrg_DeliveryChargeSpecification.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]].
 * @see https://schema.org/ShippingRateSettings
 */
export const SCHEMA_ORG_ShippingRateSettings = "https://schema.org/ShippingRateSettings" as const;

/**
 * A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]].
 * @see https://schema.org/ShippingRateSettings
 */
export interface SchemaOrg_ShippingRateSettings extends SchemaOrg_StructuredValue {
    /**
     * Indicates when shipping to a particular [[shippingDestination]] is not available.
     * @see https://schema.org/doesNotShip
     */
    doesNotShip?: Array<SchemaOrg_Boolean>;
    /**
     * A monetary value above (or at) which the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]].
     * @see https://schema.org/freeShippingThreshold
     */
    freeShippingThreshold?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_DeliveryChargeSpecification>;
    /**
     * This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.
     * @see https://schema.org/isUnlabelledFallback
     */
    isUnlabelledFallback?: Array<SchemaOrg_Boolean>;
    /**
     * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
     * @see https://schema.org/shippingDestination
     */
    shippingDestination?: Array<SchemaOrg_DefinedRegion>;
    /**
     * Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
     * @see https://schema.org/shippingLabel
     */
    shippingLabel?: Array<SchemaOrg_Text>;
    /**
     * The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
     * @see https://schema.org/shippingRate
     */
    shippingRate?: Array<SchemaOrg_MonetaryAmount>;
}
