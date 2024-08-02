// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer. */
export interface ClassOrder extends ClassIntangible {
  /** The offer(s) -- e.g., product, quantity and price combinations -- included in the order. */
  acceptedOffer: Array<{ "@id": string }>;
  /** The billing address for the order. */
  billingAddress: Array<{ "@id": string }>;
  /** An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
  broker: Array<{ "@id": string }>;
  /** A number that confirms the given order or payment has been received. */
  confirmationNumber: Array<string>;
  /** Party placing the order or paying the invoice. */
  customer: Array<{ "@id": string }>;
  /** Any discount applied (to an Order). */
  discount: Array<number | string>;
  /** Code used to redeem a discount. */
  discountCode: Array<string>;
  /** The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  discountCurrency: Array<string>;
  /** Indicates whether the offer was accepted as a gift for someone other than the buyer. */
  isGift: Array<boolean>;
  /** 'merchant' is an out-dated term for 'seller'. */
  merchant: Array<{ "@id": string }>;
  /** Date order was placed. */
  orderDate: Array<string>;
  /** The delivery of the parcel related to this order or order item. */
  orderDelivery: Array<{ "@id": string }>;
  /** The identifier of the transaction. */
  orderNumber: Array<string>;
  /** The current status of the order. */
  orderStatus: Array<{ "@id": string }>;
  /** The item ordered. */
  orderedItem: Array<{ "@id": string }>;
  /** The order is being paid as part of the referenced Invoice. */
  partOfInvoice: Array<{ "@id": string }>;
  /** The date that payment is due. */
  paymentDue: Array<string>;
  /** The date that payment is due. */
  paymentDueDate: Array<string>;
  /** The name of the credit card or other method of payment for the order. */
  paymentMethod: Array<{ "@id": string }>;
  /** An identifier for the method of payment used (e.g. the last 4 digits of the credit card). */
  paymentMethodId: Array<string>;
  /** The URL for sending a payment. */
  paymentUrl: Array<{ "@id": string }>;
  /** An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider. */
  seller: Array<{ "@id": string }>;
}
