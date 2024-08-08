// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_PaymentMethod } from "./SchemaOrg_PaymentMethod.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";

/**
 * The costs of settling the payment using a particular payment method.
 * @see https://schema.org/PaymentChargeSpecification
 */
export const SCHEMA_ORG_PaymentChargeSpecification = "https://schema.org/PaymentChargeSpecification" as const;

/**
 * The costs of settling the payment using a particular payment method.
 * @see https://schema.org/PaymentChargeSpecification
 */
export interface SchemaOrg_PaymentChargeSpecification extends SchemaOrg_PriceSpecification {
    /**
     * The delivery method(s) to which the delivery charge or payment charge specification applies.
     * @see https://schema.org/appliesToDeliveryMethod
     */
    appliesToDeliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
    /**
     * The payment method(s) to which the payment charge specification applies.
     * @see https://schema.org/appliesToPaymentMethod
     */
    appliesToPaymentMethod?: Array<SchemaOrg_PaymentMethod>;
}
