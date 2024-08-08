// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DeliveryEvent } from "./SchemaOrg_DeliveryEvent.ts";
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Order } from "./SchemaOrg_Order.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * The delivery of a parcel either via the postal service or a commercial service.
 * @see https://schema.org/ParcelDelivery
 */
export const SCHEMA_ORG_ParcelDelivery = "https://schema.org/ParcelDelivery" as const;

/**
 * The delivery of a parcel either via the postal service or a commercial service.
 * @see https://schema.org/ParcelDelivery
 */
export interface SchemaOrg_ParcelDelivery extends SchemaOrg_Intangible {
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     * @see https://schema.org/carrier
     */
    carrier?: Array<SchemaOrg_Organization>;
    /**
     * Destination address.
     * @see https://schema.org/deliveryAddress
     */
    deliveryAddress?: Array<SchemaOrg_PostalAddress>;
    /**
     * New entry added as the package passes through each leg of its journey (from shipment to final delivery).
     * @see https://schema.org/deliveryStatus
     */
    deliveryStatus?: Array<SchemaOrg_DeliveryEvent>;
    /**
     * The earliest date the package may arrive.
     * @see https://schema.org/expectedArrivalFrom
     */
    expectedArrivalFrom?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The latest date the package may arrive.
     * @see https://schema.org/expectedArrivalUntil
     */
    expectedArrivalUntil?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * Method used for delivery or shipping.
     * @see https://schema.org/hasDeliveryMethod
     */
    hasDeliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
    /**
     * Item(s) being shipped.
     * @see https://schema.org/itemShipped
     */
    itemShipped?: Array<SchemaOrg_Product>;
    /**
     * Shipper's address.
     * @see https://schema.org/originAddress
     */
    originAddress?: Array<SchemaOrg_PostalAddress>;
    /**
     * The overall order the items in this delivery were included in.
     * @see https://schema.org/partOfOrder
     */
    partOfOrder?: Array<SchemaOrg_Order>;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * @see https://schema.org/provider
     */
    provider?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Shipper tracking number.
     * @see https://schema.org/trackingNumber
     */
    trackingNumber?: Array<SchemaOrg_Text>;
    /**
     * Tracking url for the parcel delivery.
     * @see https://schema.org/trackingUrl
     */
    trackingUrl?: Array<SchemaOrg_URL>;
}
