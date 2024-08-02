// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** The delivery of a parcel either via the postal service or a commercial service. */
export interface ClassParcelDelivery extends ClassIntangible {
  /** 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights. */
  carrier: Array<{ "@id": string }>;
  /** Destination address. */
  deliveryAddress: Array<{ "@id": string }>;
  /** New entry added as the package passes through each leg of its journey (from shipment to final delivery). */
  deliveryStatus: Array<{ "@id": string }>;
  /** The earliest date the package may arrive. */
  expectedArrivalFrom: Array<string>;
  /** The latest date the package may arrive. */
  expectedArrivalUntil: Array<string>;
  /** Method used for delivery or shipping. */
  hasDeliveryMethod: Array<{ "@id": string }>;
  /** Item(s) being shipped. */
  itemShipped: Array<{ "@id": string }>;
  /** Shipper's address. */
  originAddress: Array<{ "@id": string }>;
  /** The overall order the items in this delivery were included in. */
  partOfOrder: Array<{ "@id": string }>;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  provider: Array<{ "@id": string }>;
  /** Shipper tracking number. */
  trackingNumber: Array<string>;
  /** Tracking url for the parcel delivery. */
  trackingUrl: Array<{ "@id": string }>;
}
