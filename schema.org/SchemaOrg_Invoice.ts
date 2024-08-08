// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Order } from "./SchemaOrg_Order.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_PaymentMethod } from "./SchemaOrg_PaymentMethod.ts";
import type { SchemaOrg_PaymentStatusType } from "./SchemaOrg_PaymentStatusType.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_PhysicalActivityCategory } from "./SchemaOrg_PhysicalActivityCategory.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A statement of the money due for goods or services; a bill.
 * @see https://schema.org/Invoice
 */
export const SCHEMA_ORG_Invoice = "https://schema.org/Invoice" as const;

/**
 * A statement of the money due for goods or services; a bill.
 * @see https://schema.org/Invoice
 */
export interface SchemaOrg_Invoice extends SchemaOrg_Intangible {
  /**
   * The identifier for the account the payment will be applied to.
   * @see https://schema.org/accountId
   */
  accountId?: Array<SchemaOrg_Text>;
  /**
   * The time interval used to compute the invoice.
   * @see https://schema.org/billingPeriod
   */
  billingPeriod?: Array<SchemaOrg_Duration>;
  /**
   * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   * @see https://schema.org/broker
   */
  broker?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   * @see https://schema.org/category
   */
  category?: Array<
    | SchemaOrg_URL
    | SchemaOrg_Thing
    | SchemaOrg_PhysicalActivityCategory
    | SchemaOrg_CategoryCode
    | SchemaOrg_Text
  >;
  /**
   * A number that confirms the given order or payment has been received.
   * @see https://schema.org/confirmationNumber
   */
  confirmationNumber?: Array<SchemaOrg_Text>;
  /**
   * Party placing the order or paying the invoice.
   * @see https://schema.org/customer
   */
  customer?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The minimum payment required at this time.
   * @see https://schema.org/minimumPaymentDue
   */
  minimumPaymentDue?: Array<
    SchemaOrg_PriceSpecification | SchemaOrg_MonetaryAmount
  >;
  /**
   * The date that payment is due.
   * @see https://schema.org/paymentDue
   */
  paymentDue?: Array<SchemaOrg_DateTime>;
  /**
   * The date that payment is due.
   * @see https://schema.org/paymentDueDate
   */
  paymentDueDate?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * The name of the credit card or other method of payment for the order.
   * @see https://schema.org/paymentMethod
   */
  paymentMethod?: Array<SchemaOrg_PaymentMethod>;
  /**
   * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
   * @see https://schema.org/paymentMethodId
   */
  paymentMethodId?: Array<SchemaOrg_Text>;
  /**
   * The status of payment; whether the invoice has been paid or not.
   * @see https://schema.org/paymentStatus
   */
  paymentStatus?: Array<SchemaOrg_Text | SchemaOrg_PaymentStatusType>;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   */
  provider?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
   * @see https://schema.org/referencesOrder
   */
  referencesOrder?: Array<SchemaOrg_Order>;
  /**
   * The date the invoice is scheduled to be paid.
   * @see https://schema.org/scheduledPaymentDate
   */
  scheduledPaymentDate?: Array<SchemaOrg_Date>;
  /**
   * The total amount due.
   * @see https://schema.org/totalPaymentDue
   */
  totalPaymentDue?: Array<
    SchemaOrg_PriceSpecification | SchemaOrg_MonetaryAmount
  >;
}
