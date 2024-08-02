// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A statement of the money due for goods or services; a bill. */
export interface ClassInvoice extends ClassIntangible {
  /** The identifier for the account the payment will be applied to. */
  accountId: Array<string>;
  /** The time interval used to compute the invoice. */
  billingPeriod: Array<{ "@id": string }>;
  /** An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
  broker: Array<{ "@id": string }>;
  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
  category: Array<string | { "@id": string }>;
  /** A number that confirms the given order or payment has been received. */
  confirmationNumber: Array<string>;
  /** Party placing the order or paying the invoice. */
  customer: Array<{ "@id": string }>;
  /** The minimum payment required at this time. */
  minimumPaymentDue: Array<{ "@id": string }>;
  /** The date that payment is due. */
  paymentDue: Array<string>;
  /** The date that payment is due. */
  paymentDueDate: Array<string>;
  /** The name of the credit card or other method of payment for the order. */
  paymentMethod: Array<{ "@id": string }>;
  /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
  paymentMethodId: Array<string>;
  /** The status of payment; whether the invoice has been paid or not. */
  paymentStatus: Array<string | { "@id": string }>;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  provider: Array<{ "@id": string }>;
  /** The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. */
  referencesOrder: Array<{ "@id": string }>;
  /** The date the invoice is scheduled to be paid. */
  scheduledPaymentDate: Array<string>;
  /** The total amount due. */
  totalPaymentDue: Array<{ "@id": string }>;
}
