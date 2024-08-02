// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPriceSpecification } from "./PriceSpecification.ts";

/** The costs of settling the payment using a particular payment method. */
export interface ClassPaymentChargeSpecification
  extends ClassPriceSpecification {
  /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
  appliesToDeliveryMethod: Array<{ "@id": string }>;
  /** The payment method(s) to which the payment charge specification applies. */
  appliesToPaymentMethod: Array<{ "@id": string }>;
}
