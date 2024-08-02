// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]]. */
export interface ClassShippingRateSettings extends ClassStructuredValue {
  /** Indicates when shipping to a particular [[shippingDestination]] is not available. */
  doesNotShip: Array<boolean>;
  /** A monetary value above (or at) which the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]]. */
  freeShippingThreshold: Array<{ "@id": string }>;
  /** This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings. */
  isUnlabelledFallback: Array<boolean>;
  /** indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges. */
  shippingDestination: Array<{ "@id": string }>;
  /** Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference). */
  shippingLabel: Array<string>;
  /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate. */
  shippingRate: Array<{ "@id": string }>;
}
