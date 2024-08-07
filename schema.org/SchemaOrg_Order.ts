// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Invoice } from "labs/SchemaOrg_Invoice.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Offer } from "labs/SchemaOrg_Offer.ts";
import type { SchemaOrg_OrderItem } from "labs/SchemaOrg_OrderItem.ts";
import type { SchemaOrg_OrderStatus } from "labs/SchemaOrg_OrderStatus.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_ParcelDelivery } from "labs/SchemaOrg_ParcelDelivery.ts";
import type { SchemaOrg_PaymentMethod } from "labs/SchemaOrg_PaymentMethod.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_PostalAddress } from "labs/SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 * @see https://schema.org/Order
 */
export const SCHEMA_ORG_Order = "https://schema.org/Order" as const;

/**
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 * @see https://schema.org/Order
 */
export interface SchemaOrg_Order extends SchemaOrg_Intangible {
    /**
     * The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
     * @see https://schema.org/acceptedOffer
     */
    acceptedOffer: Array<SchemaOrg_Offer>;
    /**
     * The billing address for the order.
     * @see https://schema.org/billingAddress
     */
    billingAddress: Array<SchemaOrg_PostalAddress>;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     * @see https://schema.org/broker
     */
    broker: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * A number that confirms the given order or payment has been received.
     * @see https://schema.org/confirmationNumber
     */
    confirmationNumber: Array<SchemaOrg_Text>;
    /**
     * Party placing the order or paying the invoice.
     * @see https://schema.org/customer
     */
    customer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Any discount applied (to an Order).
     * @see https://schema.org/discount
     */
    discount: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * Code used to redeem a discount.
     * @see https://schema.org/discountCode
     */
    discountCode: Array<SchemaOrg_Text>;
    /**
     * The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/discountCurrency
     */
    discountCurrency: Array<SchemaOrg_Text>;
    /**
     * Indicates whether the offer was accepted as a gift for someone other than the buyer.
     * @see https://schema.org/isGift
     */
    isGift: Array<SchemaOrg_Boolean>;
    /**
     * 'merchant' is an out-dated term for 'seller'.
     * @see https://schema.org/merchant
     */
    merchant: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Date order was placed.
     * @see https://schema.org/orderDate
     */
    orderDate: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The delivery of the parcel related to this order or order item.
     * @see https://schema.org/orderDelivery
     */
    orderDelivery: Array<SchemaOrg_ParcelDelivery>;
    /**
     * The identifier of the transaction.
     * @see https://schema.org/orderNumber
     */
    orderNumber: Array<SchemaOrg_Text>;
    /**
     * The current status of the order.
     * @see https://schema.org/orderStatus
     */
    orderStatus: Array<SchemaOrg_OrderStatus>;
    /**
     * The item ordered.
     * @see https://schema.org/orderedItem
     */
    orderedItem: Array<SchemaOrg_Product | SchemaOrg_OrderItem | SchemaOrg_Service>;
    /**
     * The order is being paid as part of the referenced Invoice.
     * @see https://schema.org/partOfInvoice
     */
    partOfInvoice: Array<SchemaOrg_Invoice>;
    /**
     * The date that payment is due.
     * @see https://schema.org/paymentDue
     */
    paymentDue: Array<SchemaOrg_DateTime>;
    /**
     * The date that payment is due.
     * @see https://schema.org/paymentDueDate
     */
    paymentDueDate: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The name of the credit card or other method of payment for the order.
     * @see https://schema.org/paymentMethod
     */
    paymentMethod: Array<SchemaOrg_PaymentMethod>;
    /**
     * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
     * @see https://schema.org/paymentMethodId
     */
    paymentMethodId: Array<SchemaOrg_Text>;
    /**
     * The URL for sending a payment.
     * @see https://schema.org/paymentUrl
     */
    paymentUrl: Array<SchemaOrg_URL>;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     * @see https://schema.org/seller
     */
    seller: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
