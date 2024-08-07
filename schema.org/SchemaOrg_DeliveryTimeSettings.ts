// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_DefinedRegion } from "labs/SchemaOrg_DefinedRegion.ts";
import type { SchemaOrg_ShippingDeliveryTime } from "labs/SchemaOrg_ShippingDeliveryTime.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
 * @see https://schema.org/DeliveryTimeSettings
 */
export const SCHEMA_ORG_DeliveryTimeSettings = "https://schema.org/DeliveryTimeSettings" as const;

/**
 * A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
 * @see https://schema.org/DeliveryTimeSettings
 */
export interface SchemaOrg_DeliveryTimeSettings extends SchemaOrg_StructuredValue {
    /**
     * The total delay between the receipt of the order and the goods reaching the final customer.
     * @see https://schema.org/deliveryTime
     */
    deliveryTime: Array<SchemaOrg_ShippingDeliveryTime>;
    /**
     * This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.
     * @see https://schema.org/isUnlabelledFallback
     */
    isUnlabelledFallback: Array<SchemaOrg_Boolean>;
    /**
     * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
     * @see https://schema.org/shippingDestination
     */
    shippingDestination: Array<SchemaOrg_DefinedRegion>;
    /**
     * Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
     * @see https://schema.org/transitTimeLabel
     */
    transitTimeLabel: Array<SchemaOrg_Text>;
}
