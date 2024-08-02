// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]]. */
export interface ClassDeliveryTimeSettings extends ClassStructuredValue {
  /** The total delay between the receipt of the order and the goods reaching the final customer. */
  deliveryTime: Array<{ "@id": string }>;
  /** This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings. */
  isUnlabelledFallback: Array<boolean>;
  /** indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges. */
  shippingDestination: Array<{ "@id": string }>;
  /** Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference). */
  transitTimeLabel: Array<string>;
}
